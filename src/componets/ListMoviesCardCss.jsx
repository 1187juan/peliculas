import styled from '@emotion/styled'

export const Card = styled('li')(({ theme }) => ({
	backgroundColor: theme.palette.surface,
	borderRadius: theme.shape.borderRadius,

	'&, a': {
		width: '100%',
		height: '100%',
	},

	a: {
		textDecoration: 'none',
		display: 'flex',
		overflow: 'hidden',
	},
}))

export const CardMedia = styled('img')({
	maxWidth: '100%',
})

export const CardPlaceholder = styled('div')(({ theme }) => ({
	margin: 'auto',
	textAlign: 'center',
	color: theme.palette.onSurfaceHigh,

	svg: {
		fontSize: '2rem',
	},

	[theme.breakpoints.up('sm')]: {
		svg: {
			fontSize: '4rem',
		},
	},
}))

export const CardTitle = styled('h1')(({ theme }) => ({
	width: 'calc(38vw - 48px)',
	maxWidth: '228px',
	margin: 0,
	overflow: 'hidden',

	fontFamily: 'Helvetica Now',
	fontSize: '0.75rem',
	fontWeight: 800,
	lineHeight: 1.2,
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',

	[theme.breakpoints.up('sm')]: {
		width: '16vw',
		fontSize: '1.2rem',
	},
}))
