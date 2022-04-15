import styled from '@emotion/styled'

export const MainContainer = styled('div')(({ theme }) => ({
	position: 'relative',
	width: '100%',
	maxWidth: '1024px',
	marginLeft: 'auto',
	marginRight: 'auto',
	padding: '1rem',

	[theme.breakpoints.up('sm')]: {
		padding: '2rem',
	},
}))
