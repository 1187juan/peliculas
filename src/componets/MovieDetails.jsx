import { LinearProgress } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useMovie } from '../hooks/UseMovies'
import { MovieDetailsBanner } from './MovieDetailsBanner'
import { MovieDetailsCast } from './MovieDetailsCast'
import { MovieDetailsRecommendations } from './MovieDetailsRecommendations'
import { MovieDetailsVideos } from './MovieDetailsVideos'
import { Footer } from './Footer'

export const MovieDetails = () => {
	const { movieId } = useParams()
	const { data, isLoading } = useMovie(movieId)

	if (isLoading) return <LinearProgress />
	const isCast = !!data.cast.length
	const isVideos = !!data.videos.length
	const isRecommendations = !!data.recommendations.length

	return (
		<>
			<MovieDetailsBanner movie={data} />
			{isCast && <MovieDetailsCast cast={data.cast} />}
			{isVideos && <MovieDetailsVideos videos={data.videos} />}
			{isRecommendations && (
				<MovieDetailsRecommendations movies={data.recommendations} />
			)}
			<Footer />
		</>
	)
}
