import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { MainContainer } from './MainContainer'

export const ContainerImg = styled('div')(({ imgUrl, theme }) => ({
	position: 'relative',

	width: 'auto',
	height: 'auto',

	backgroundColor: theme.palette.bg,

	'&::before': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,

		background: `url(${imgUrl}) no-repeat center/cover`,

		opacity: 0.32,
	},
}))

export const Poster = styled('div')(({ theme }) => ({
	display: 'grid',
	justifyContent: 'center',
	[theme.breakpoints.up('sm')]: {
		gridTemplate: 'max-content max-content / 100%',
	},
}))

export const PosterImg = styled('img')(({ theme, borderMedium }) => ({
	position: 'relative',
	justifySelf: 'center',
	width: 'auto',
	height: '65vh',
	borderRadius: borderMedium
		? theme.spacing(0.5, 0.5, 0, 0)
		: theme.spacing(0.5),

	[theme.breakpoints.up('sm')]: {
		width: '100%',
		height: 'auto',
	},
}))

export const PosterStream = styled('div')(({ theme }) => ({
	padding: '0.5rem 1rem',
	display: 'flex',
	alignItems: 'center',
	gap: '1rem',
	backgroundColor: theme.palette.black,
	color: theme.palette.white,
	borderRadius: theme.spacing(0, 0, 0.5, 0.5),
}))

export const PosterStreamImg = styled('img')(({ theme }) => ({
	borderRadius: theme.spacing(0.5),
	width: '40px',
}))

export const PosterPlaceholder = styled('section')(({ theme }) => ({
	height: '100%',
	width: '100%',
	display: 'grid',
	justifyItems: 'center',
	placeContent: 'center',
	padding: theme.spacing(4, 2),
	borderRadius: '.25rem',

	backgroundColor: theme.palette.surface,
	color: theme.palette.onSurfaceHigh,
}))

export const Container = styled(MainContainer)(({ theme }) => ({
	position: 'relative',

	display: 'grid',
	gridTemplate: 'auto auto / auto',
	gap: '2rem',

	[theme.breakpoints.up('sm')]: {
		gridTemplate: 'auto / 1fr 2fr',
	},
}))

export const SubTitle = styled(Typography)(({ theme }) => ({
	display: 'flex',
	columnGap: '0.5rem',
	flexWrap: 'wrap',
}))

export const Punctuation = styled('div')({
	display: 'flex',
	gap: '1rem',
	alignItems: 'center',
	marginBottom: '1rem',
})

export const BoxButtons = styled('div')(({ theme }) => ({
	display: 'flex',
	gap: '1rem',
	flexDirection: 'column',
	maxWidth: 'min(100%, 320px)',
	marginLeft: 'auto',
	marginRight: 'auto',
	marginBottom: '1rem',

	[theme.breakpoints.up('sm')]: {
		marginLeft: '0',
		marginRight: '0',
		flexDirection: 'row',
	},
}))
