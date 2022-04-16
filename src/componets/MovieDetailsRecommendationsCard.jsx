import { MovieRounded } from '@mui/icons-material'
import { Typography } from '@mui/material'
import PropTypes from 'prop-types'
import {
	CardLink,
	CardMedia,
	CardPlaceholder,
} from './MovieDetailsRecommendationsCardCss'

export const MovieDetailsRecommendationsCard = ({ movieId, imgUrl, title }) => {
	return (
		<CardLink to={'/movie/' + movieId}>
			{imgUrl && <CardMedia src={imgUrl} alt={title} />}
			{!imgUrl && (
				<CardPlaceholder>
					<MovieRounded sx={{ fontSize: { xs: '2rem', sm: '3rem' } }} />
					<Typography variant='subtitle1' color='text.primary'>
						{title}
					</Typography>
				</CardPlaceholder>
			)}
		</CardLink>
	)
}

MovieDetailsRecommendationsCard.propTypes = {
	movieId: PropTypes.number.isRequired,
	imgUrl: PropTypes.string,
	title: PropTypes.string.isRequired,
}
