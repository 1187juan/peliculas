import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const LinkCard = styled(Link)(({ theme }) => ({
	position: 'relative',

	textDecoration: 'none',
	color: theme.palette.text.primary,

	transition: 'transform 0.2s',

	img: {
		maxWidth: '400px',
	},
	p: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: '50%',
		marginBottom: 0,
		display: 'flex',
		alignItems: 'flex-end',
		padding: '1rem',

		lineHeight: '1.5rem',

		color: theme.palette.white,
		backgroundColor: 'rgba(0, 0, 0, 0.54)',
		background: `linear-gradient(0deg, rgba(0,0,0,0.54), transparent)`,
	},
	'&:hover': {
		transform: 'scale(0.9)',
	},
}))

export const Placeholder = styled('div')(({ theme }) => ({
	position: 'relative',
	width: '300px',
	paddingBottom: 'calc(100% / (16 / 9))',
	display: 'flex',
	placeContent: 'center',

	color: theme.palette.onSurfaceHigh,
	backgroundColor: theme.palette.surface,

	svg: {
		position: 'absolute',
		top: '50%',

		fontSize: '4rem',

		transform: 'translateY(-50%)',
	},
}))
