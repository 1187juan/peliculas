import styled from '@emotion/styled'

export const Container = styled('section')(({ theme }) => ({
	width: '100%',
	height: '100vh',
	padding: '1rem',
	display: 'grid',
	gridTemplate: '35% max-content / 100%',
	placeContent: 'center',
	gap: '1rem',

	textAlign: 'center',

	[theme.breakpoints.up('sm')]: {
		gridTemplate: '50% max-content / min(100%, 600px)',
	},

	svg: {},
}))
