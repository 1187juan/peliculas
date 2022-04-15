import styled from '@emotion/styled'
import YouTube from 'react-youtube'

export const Content = styled('div')(({ theme }) => ({
	width: '100%',
	maxWidth: 'calc(992px - 2rem)',
	margin: '1rem',

	'& > div': {
		position: 'relative',

		paddingBottom: 'calc(100% / (16 / 9))',
		overflow: 'hidden',

		borderRadius: theme.spacing(0.5),
	},

	[theme.breakpoints.up('sm')]: {
		margin: '2rem',
	},
}))

export const YouTubeCustom = styled(YouTube)({
	position: 'absolute',
	top: 0,
	width: '100%',
	height: '100%',
})
