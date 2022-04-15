import styled from '@emotion/styled'

export const ListMovies = styled('ul')(({ theme }) => ({
	width: '100%',
	maxWidth: '1024px',
	marginLeft: 'auto',
	marginRight: 'auto',
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gap: '0.5rem',
	padding: '1rem',
	listStyle: 'none',

	[theme.breakpoints.up('sm')]: {
		gridTemplateColumns: 'repeat(4, 1fr)',
		padding: '2rem',
		gap: '1rem',
	},
}))

export const BoxCircularProgress = styled('div')({
	margin: '8px auto',
	width: '48px',
})

export const Empty = styled('section')(({ theme }) => ({
	marginTop: 'calc(50vh - 64px)',
	padding: '16px',
	textAlign: 'center',
	height: '100%',
	transform: 'translateY(-50%)',
}))
export const EmptySpan = styled('section')(({ theme }) => ({
	color: theme.palette.onSurfaceHigh,
}))
