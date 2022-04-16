import { API } from './api'
import { createImgMovieUrl } from './createImgMovieUrl'

export const getMovie = async (movieId) => {
	const data = await API(
		`/movie/${movieId}?append_to_response=videos,images,credits,recommendations,watch/providers&language=es-mx,es-es`
	)

	const backdropUrl500 = createImgMovieUrl(data.backdrop_path, 500)
	const posterUrl300 = createImgMovieUrl(data.poster_path, 300)
	const genres = data.genres.map((genre) => genre.name)
	const videos = data?.videos.results.map((video) => video.key) ?? []
	const streamPath = data['watch/providers'].results.MX?.flatrate?.[0].logo_path
	const streamUrl200 = createImgMovieUrl(streamPath, 200)
	const cast =
		data?.credits.cast.map((actor) => ({
			id: actor.cast_id,
			name: actor.name,
			character: actor.character,
			profileUrl300: createImgMovieUrl(actor.profile_path, 300),
		})) ?? []
	const recommendations = data.recommendations?.results.map((movie) => ({
		id: movie.id,
		title: movie.title,
		posterUrl300: createImgMovieUrl(movie.poster_path, 300),
	}))

	const dataAfter = {
		backdropUrl500,
		genres,
		id: data.id,
		overview: data.overview,
		posterUrl300,
		releaseDate: data.release_date,
		runtime: data.runtime,
		title: data.title,
		videos,
		voteAverage: data.vote_average,
		voteCount: data.vote_count,
		streamUrl200,
		cast,
		recommendations,
	}

	return dataAfter
}
