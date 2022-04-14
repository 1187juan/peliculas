const apiKey = process.env.REACT_APP_TMDB_API_KEY

export const API = async (path) => {
	const res = await fetch('https://api.themoviedb.org/3' + path, {
		headers: {
			Authorization: 'Bearer ' + apiKey,
			'Content-Type': 'application/json;charset=utf-8',
		},
	})

	if (!res.ok)
		throw new Error('Error al buscar la película, intentalo más tarde.')

	const data = await res.json()
	return data
}
