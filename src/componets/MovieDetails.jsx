import { LinearProgress } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useMovie } from '../hooks/UseMovies'
import { MovieDetailsBanner } from './MovieDetailsBanner'
import { MovieDetailsCast } from './MovieDetailsCast'

export const MovieDetails = () => {
	const { movieId } = useParams()
	const { data, isLoading } = useMovie(movieId)

	if (isLoading) return <LinearProgress />
	const isCast = !!data.cast.length

	return (
		<>
			<MovieDetailsBanner movie={data} />
			{isCast && <MovieDetailsCast cast={data.cast} />}
		</>
	)
}
