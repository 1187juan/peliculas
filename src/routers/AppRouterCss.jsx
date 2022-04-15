import styled from '@emotion/styled'

export const Main = styled('main')(({ theme }) => ({
	minHeight: 'calc(100vh - 112px)',

	[theme.breakpoints.up('sm')]: {
		minHeight: 'calc(100vh - 64px)',
		paddingBottom: 0,
	},
}))
