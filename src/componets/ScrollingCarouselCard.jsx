import PropTypes from 'prop-types'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Placeholder } from './ScrollingCarouselCardCss'
import { PersonRounded } from '@mui/icons-material'

export const ScrollingCarouselCard = ({ title, subTitle, imgUrl }) => {
	return (
		<Card sx={{ maxWidth: { xs: '150px', sm: '200px' } }}>
			{imgUrl ? (
				<CardMedia component='img' draggable={false} src={imgUrl} />
			) : (
				<Placeholder>
					<PersonRounded sx={{ fontSize: { xs: 150, sm: 200 } }} />
				</Placeholder>
			)}
			<CardContent>
				<Typography
					variant='subtitle1'
					sx={{
						whiteSpace: 'nowrap',
						textOverflow: 'ellipsis',
						overflow: 'hidden',
					}}
				>
					{title}
				</Typography>
				<Typography
					variant='body1'
					color='text.secondary'
					sx={{
						whiteSpace: 'nowrap',
						textOverflow: 'ellipsis',
						overflow: 'hidden',
					}}
				>
					{subTitle}
				</Typography>
			</CardContent>
		</Card>
	)
}

ScrollingCarouselCard.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	imgUrl: PropTypes.string,
}
