import styled from '@emotion/styled'

export const Container = styled('section')(({ theme }) => ({
	position: 'relative',
	minHeight: '300px',
	gridColumn: '1 / -1',
	gridRow: ' 2 ',
	display: 'grid',
	gridTemplate: '300px 150px / auto',

	[theme.breakpoints.up('sm')]: {
		gridTemplate: '100% / 1fr 2fr',
	},
}))

export const Media = styled('div')(({ theme, img }) => ({
	position: 'relative',
	gridRow: '1',

	background: `url(${img}) no-repeat center/cover`,
	borderRadius: '0.25rem',

	'&::before': {
		content: '""',
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,

		background: `linear-gradient(0deg, ${theme.palette.background.paper}, transparent 50%)`,
	},
	[theme.breakpoints.up('sm')]: {
		'&::before': {
			background: `linear-gradient(90deg, ${theme.palette.background.paper}, transparent 50%)`,
		},
		gridRow: 'auto',
	},
}))

export const Content = styled('div')(({ theme }) => ({
	padding: '1rem',
	display: 'grid',
	placeContent: 'center',
	justifyItems: 'center',
	gap: '1rem',

	textAlign: 'center',

	backgroundColor: theme.palette.background.paper,
}))
