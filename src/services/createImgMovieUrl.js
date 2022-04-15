export const createImgMovieUrl = (path, width = 500) => {
	if (!path) return null
	return `https://image.tmdb.org/t/p/w${width}${path}`
}
