import styled from '@emotion/styled'
import { MovieRounded } from '@mui/icons-material'
import PropTypes from 'prop-types'

const CardPlaceholder = styled('div')(({ theme }) => ({
	margin: 'auto',
	textAlign: 'center',
	color: theme.palette.onSurfaceHigh,

	svg: {
		fontSize: '2rem',
	},

	[theme.breakpoints.up('sm')]: {
		svg: {
			fontSize: '4rem',
		},
	},
}))

const CardTitle = styled('h1')(({ theme }) => ({
	width: 'calc(38vw - 48px)',
	maxWidth: '228px',
	margin: 0,
	overflow: 'hidden',

	fontFamily: 'Helvetica Now',
	fontSize: '0.75rem',
	fontWeight: 800,
	lineHeight: 1.2,
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',

	[theme.breakpoints.up('sm')]: {
		width: '16vw',
		fontSize: '1.2rem',
	},
}))

export const CardPlaceholderMovie = ({ title }) => {
	return (
		<CardPlaceholder>
			<MovieRounded />
			<CardTitle>{title}</CardTitle>
		</CardPlaceholder>
	)
}

CardPlaceholderMovie.propTypes = {
	title: PropTypes.string,
}
