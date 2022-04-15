import styled from '@emotion/styled'
import { ScrollingCarousel } from '@trendyol-js/react-carousel'

export const Carrousel = styled(ScrollingCarousel)(({ theme }) => ({
	width: 'calc(100% + 2rem)',
	transform: 'translateX(-1rem)',

	'& .styles-module_slider__o0fqa': {
		padding: '0 1rem',
		gap: '0.5rem',
	},

	[theme.breakpoints.up('sm')]: {
		width: 'auto',
		transform: 'translateX(0)',

		'& .styles-module_slider__o0fqa': {
			padding: 0,
			gap: '1rem',
		},
	},
}))

export const ArrowBox = styled('a')(({ theme, invert }) => ({
	display: 'none',

	[theme.breakpoints.up('sm')]: {
		position: 'absolute',
		top: '50%',
		right: !invert ? 0 : '',
		left: invert ? 0 : '',
		zIndex: 1,

		display: 'block',
		padding: '2rem 0.5rem',

		lineHeight: 0,

		backgroundColor: theme.palette.surface,
		color: theme.palette.onSurfaceMedium,
		borderRadius: '0.25rem',
		outline: '2px solid ' + theme.palette.outline,
		outlineOffset: '-2px',

		transform: 'translateY(-50%)',
		cursor: 'pointer',

		'&:hover': {
			opacity: 0.9,
		},
	},
}))
