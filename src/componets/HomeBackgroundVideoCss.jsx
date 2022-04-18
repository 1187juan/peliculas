import styled from '@emotion/styled'

export const Video = styled('video')(({ top = 0, theme }) => ({
	position: 'fixed',
	top: 0,
	zIndex: -1,

	width: '100%',
	height: '100%',
	objectFit: 'cover',
	objectPosition: 'bottom',
	transform: `translateY(${top}px)`,

	[theme.breakpoints.down('sm')]: {
		transition: 'transform 0.2s linear',
	},
}))
