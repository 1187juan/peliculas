import { MovieRounded } from '@mui/icons-material'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
	Card,
	CardMedia,
	CardPlaceholder,
	CardTitle,
} from './ListMoviesCardCss'

export const ListMoviesCard = ({ imgUrl, title, id }) => {
	const isImgUrl = !!imgUrl
	const isNotImgUrl = !imgUrl

	return (
		<Card>
			<Link to={'/movie/' + id}>
				{isImgUrl && <CardMedia src={imgUrl} alt={title} />}
				{isNotImgUrl && (
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
	imgUrl: PropTypes.string,
	title: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
}
