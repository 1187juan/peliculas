import { Title } from './Title'
import { Box } from '@mui/system'
import { ScrollingCarousel } from './ScrollingCarousel'
import PropTypes from 'prop-types'
import { MainContainer } from './MainContainer'
import { MovieDetailsRecommendationsCard } from './MovieDetailsRecommendationsCard'

export const MovieDetailsRecommendations = ({ movies }) => {
	return (
		<MainContainer>
			<Title variant='h4' component='h2'>
				Recomendaciones{' '}
				<Box component='span' color='text.secondary'>
					({movies.length})
				</Box>
			</Title>
			<ScrollingCarousel>
				{movies.map((movie) => (
					<MovieDetailsRecommendationsCard
						key={movie.id}
						movieId={movie.id}
						title={movie.title}
						imgUrl={movie.posterUrl300}
					/>
				))}
			</ScrollingCarousel>
		</MainContainer>
	)
}

MovieDetailsRecommendations.propTypes = {
	movies: PropTypes.array.isRequired,
}
