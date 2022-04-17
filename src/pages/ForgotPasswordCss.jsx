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

export const Form = styled('form')(({ theme }) => ({
	display: 'grid',
	gap: '1rem',
}))
