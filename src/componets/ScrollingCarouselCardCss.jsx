import styled from '@emotion/styled'

export const Placeholder = styled('div')(({ theme }) => ({
	width: { xs: '150px', sm: '200px' },
	height: 'calc(100% - 6rem)',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: theme.palette.surface,
	color: theme.palette.onSurfaceMedium,
}))
