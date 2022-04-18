import { ChevronRightRounded } from '@mui/icons-material'
import { Button } from '@mui/material'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { LastSavedMoviesCarouselCard } from './LastSavedMoviesCarouselCard'
import { CardShowMore, Container } from './LastSavedMoviesCss'
import { ScrollingCarousel } from './ScrollingCarousel'
import { Title } from './Title'

export const LastSavedMovies = ({ movies }) => {
	const numberMovies = movies.length

	return (
		<Container>
			<Title variant='h4' component='h1' sx={{ paddingLeft: '1rem' }}>
				Últimas películas guardadas
			</Title>
			<ScrollingCarousel>
				{movies.map((movie) => (
					<LastSavedMoviesCarouselCard
						key={nanoid()}
						id={movie.id}
						title={movie.title}
						imgUrl={movie.backdropUrl300}
					/>
				))}
				{numberMovies > 4 && (
					<CardShowMore>
						<Button
							LinkComponent={Link}
							to='/saved-movies'
							variant='contained'
							endIcon={<ChevronRightRounded />}
						>
							Ver más
						</Button>
					</CardShowMore>
				)}
			</ScrollingCarousel>
		</Container>
	)
}

LastSavedMovies.propTypes = {
	movies: PropTypes.array.isRequired,
}
