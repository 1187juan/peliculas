import styled from '@emotion/styled'

export const ContainerVideo = styled('div')(({ theme }) => ({
	width: '100%',
	height: 'calc(75vh - 56px)',

	[theme.breakpoints.up('sm')]: {
		height: 'calc(85vh - 64px)',
	},
}))

export const Video = styled('video')(({ top = 0, theme }) => ({
	position: 'absolute',
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
