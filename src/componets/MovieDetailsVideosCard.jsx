import PropTypes from 'prop-types'
import { Container, YouTubeCustom } from './MovieDetailsVideosCardCss'

export const MovieDetailsVideosCard = ({ videoId }) => {
	return (
		<Container>
			<YouTubeCustom
				videoId={videoId}
				id={videoId}
				opts={{
					playerVars: {
						autoplay: 0,
						controls: 2,
						enablejsapi: 1,
						playsinline: 0,
						rel: 0,
						origin: window.location.origin,
					},
				}}
			/>
		</Container>
	)
}

MovieDetailsVideosCard.propTypes = {
	videoId: PropTypes.string.isRequired,
}
