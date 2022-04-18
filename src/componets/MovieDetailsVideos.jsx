import { Box } from '@mui/material'
import { MainContainer } from './MainContainer'
import { ScrollingCarousel } from './ScrollingCarousel'
import { Title } from './Title'
import PropTypes from 'prop-types'
import { MovieDetailsVideosCard } from './MovieDetailsVideosCard'

export const MovieDetailsVideos = ({ videos }) => {
	return (
		<MainContainer>
			<Title variant='h4' component='h2'>
				Videos
				<Box component='span' color='text.secondary'>
					{' '}
					({videos.length})
				</Box>
			</Title>
			<ScrollingCarousel>
				{videos.map((videoId) => (
					<MovieDetailsVideosCard key={videoId} videoId={videoId} />
				))}
			</ScrollingCarousel>
		</MainContainer>
	)
}

MovieDetailsVideos.propTypes = {
	videos: PropTypes.array.isRequired,
}
