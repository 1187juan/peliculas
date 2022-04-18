import { API } from './api'
import { createImgMovieUrl } from './createImgMovieUrl'

export const getMovies = async (page = 1) => {
	const data = await API(`/discover/movie?page=${page}`)

	const movies = data?.results.map((result) => ({
		id: result.id,
		title: result.title,
		posterUrl300: createImgMovieUrl(result.poster_path, 300),
		backdropUrl500: createImgMovieUrl(result.backdrop_path, 500),
		backdropUrl300: createImgMovieUrl(result.backdrop_path, 300),
	}))

	const dataAfter = {
		page: data.page,
		totalPages: data.total_pages,
		movies,
	}

	return dataAfter
}
