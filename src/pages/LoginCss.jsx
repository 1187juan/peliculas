import styled from '@emotion/styled'

export const Container = styled('section')(({ theme }) => ({
	width: '100%',
	minHeight: 'calc(100vh - 112px)',
	padding: '1rem 2rem',

	textAlign: 'center',

	backgroundColor: theme.palette.surface,

	[theme.breakpoints.up('sm')]: {
		position: 'absolute',
		top: '28px',
		left: 'calc(50% - 200px)',
		maxWidth: 400,
		padding: '4rem 2rem',
		borderRadius: theme.shape.borderRadius,
	},
}))

export const SocialBox = styled('div')(({ theme }) => ({
	display: 'grid',
	gridTemplate: 'auto auto / auto',
	gap: '1rem',

	[theme.breakpoints.up('sm')]: {
		gridTemplate: 'auto / 1fr 1fr',
	},
}))

export const Divider = styled('div')(({ theme }) => ({
	position: 'relative',
	width: 'auto',
	height: '1px',
	margin: '2rem 1rem',

	backgroundColor: theme.palette.outline,

	' &::after': {
		content: '"o"',
		position: 'absolute',
		top: 0,
		width: '4rem',

		backgroundColor: theme.palette.surface,

		transform: 'translate(-50%, -50%)',
	},
}))
