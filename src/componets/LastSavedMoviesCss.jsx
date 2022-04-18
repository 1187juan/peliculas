import styled from '@emotion/styled'

export const Container = styled('div')(({ theme }) => ({
	minHeight: '300px',
	gridColumn: '1 / -1',
	gridRow: ' 2 ',
	padding: '1rem 0',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: theme.palette.surface,
}))

export const CardShowMore = styled('div')({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
})
