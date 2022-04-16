import styled from '@emotion/styled'

export const Container = styled('footer')(({ theme }) => ({
	position: 'fixed',
	bottom: 0,

	width: '100%',
	height: 56,
	padding: '0px 1rem',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',

	backgroundColor: theme.palette.surface,
}))
