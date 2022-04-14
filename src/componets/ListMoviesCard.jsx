import { MovieRounded } from '@mui/icons-material'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
	Card,
	CardMedia,
	CardPlaceholder,
	CardTitle,
} from './ListMoviesCardCss'

export const ListMoviesCard = ({ imageUrl, title, id }) => {
	const isImageUrl = !!imageUrl
	const isNotImageUrl = !imageUrl

	return (
		<Card>
			<Link to={'/movie/' + id}>
				{isImageUrl && <CardMedia src={imageUrl} alt={title} />}
				{isNotImageUrl && (
					<CardPlaceholder>
						<MovieRounded />
						<CardTitle>{title}</CardTitle>
					</CardPlaceholder>
				)}
			</Link>
		</Card>
	)
}

ListMoviesCard.propTypes = {
	imageUrl: PropTypes.string,
	title: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
}
