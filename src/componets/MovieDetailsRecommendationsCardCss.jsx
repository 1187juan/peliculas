import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const CardLink = styled(Link)({
	textDecoration: 'none',
})

export const CardMedia = styled('img')({
	maxWidth: '250px',
	transition: 'transform 0.2s',
	'&:hover': {
		transform: 'scale(0.9)',
	},
})

export const CardPlaceholder = styled('div')(({ theme }) => ({
	width: '250px',
	height: '375px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	gap: '1rem',

	backgroundColor: theme.palette.surface,
	color: theme.palette.onSurfaceHigh,
	borderRadius: '0.25rem',
}))
