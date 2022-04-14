import { API } from './api'
import { createImageMovieUrl } from './createImageMovieUrl'

export const getMovies = async (page = 1) => {
	const data = await API(`/discover/movie?page=${page}`)

	const movies = data?.results.map((result) => ({
		id: result.id,
		title: result.title,
		posterUrl_300: createImageMovieUrl(result.poster_path, 300),
	}))

	const dataAfter = {
		page: data.page,
		totalPages: data.total_pages,
		movies,
	}

	return dataAfter
}
