import { Box } from '@mui/system'
import PropTypes from 'prop-types'
import { MainContainer } from './MainContainer'
import { ScrollingCarousel } from './ScrollingCarousel'
import { ScrollingCarouselCard } from './ScrollingCarouselCard'
import { Title } from './Title'

export const MovieDetailsCast = ({ cast }) => {
	return (
		<MainContainer>
			<Title variant='h4' component='h2'>
				Reparto
				<Box component='span' color='text.secondary'>
					{' '}
					({cast.length})
				</Box>
			</Title>
			<ScrollingCarousel>
				{cast.map((actor) => (
					<ScrollingCarouselCard
						key={actor.id}
						title={actor.name}
						subTitle={actor.character}
						imgUrl={actor.profileUrl300}
					/>
				))}
			</ScrollingCarousel>
		</MainContainer>
	)
}

MovieDetailsCast.propTypes = {
	cast: PropTypes.array.isRequired,
}
