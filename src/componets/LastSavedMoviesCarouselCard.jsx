import { LinkCard, Placeholder } from './LastSavedMoviesCarouselCardCss'
import PropTypes from 'prop-types'
import { MovieRounded } from '@mui/icons-material'
import { Title } from './Title'

export const LastSavedMoviesCarouselCard = ({ id, title, imgUrl }) => {
	return (
		<LinkCard to={'/movie/' + id}>
			{imgUrl && <img src={imgUrl} alt={title} />}
			{!imgUrl && (
				<Placeholder>
					<MovieRounded />
				</Placeholder>
			)}
			<Title variant='h4' component='p'>
				{title}
			</Title>
		</LinkCard>
	)
}

LastSavedMoviesCarouselCard.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	imgUrl: PropTypes.string,
}
