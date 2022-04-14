import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { CardPlaceholderMovie } from './CardPlaceholderMovie'

const Card = styled('li')(({ theme }) => ({
	backgroundColor: theme.palette.surface,
	borderRadius: theme.shape.borderRadius,

	'&, a': {
		width: '100%',
		height: '100%',
	},

	a: {
		textDecoration: 'none',
		display: 'flex',
		overflow: 'hidden',
	},
}))

const CardMedia = styled('img')({
	maxWidth: '100%',
})

export const ListMoviesCard = ({ imageUrl, title, id }) => {
	const isImageUrl = !!imageUrl
	const isNotImageUrl = !imageUrl

	return (
		<Card>
			<Link to={'/movie/' + id}>
				{isImageUrl && <CardMedia src={imageUrl} alt={title} />}
				{isNotImageUrl && <CardPlaceholderMovie title={title} />}
			</Link>
		</Card>
	)
}

ListMoviesCard.propTypes = {
	imageUrl: PropTypes.string,
	title: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
}
