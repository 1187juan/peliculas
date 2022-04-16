import styled from '@emotion/styled'
import YouTube from 'react-youtube'

export const Container = styled('div')(({ theme }) => ({
	width: '100%',

	'& > div': {
		position: 'relative',
		paddingBottom: 'calc(100% / (16 / 9))',
	},

	[theme.breakpoints.up('sm')]: {
		width: 'calc(50% - 0.5rem)',
	},
}))

export const YouTubeCustom = styled(YouTube)(({ theme }) => ({
	position: 'absolute',
	top: 0,

	width: '100%',
	height: '100%',
	overflow: 'hidden',

	borderRadius: theme.spacing(0.5),
}))
