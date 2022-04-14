import styled from '@emotion/styled'

export const Form = styled('form')(({ theme }) => ({
	position: 'relative',
	width: '100%',
	height: '40px',
	display: 'flex',
	alignItems: 'center',

	backgroundColor: theme.palette.outline,
	borderRadius: theme.shape.borderRadius,

	'&:hover': {
		filter: 'brightness(0.95)',
	},

	[theme.breakpoints.up('sm')]: {
		width: 'auto',
	},
}))

export const Input = styled('input')(({ theme }) => ({
	width: '100%',
	height: '100%',
	padding: theme.spacing(1, 1, 1, 0),
	paddingLeft: `calc(1em + ${theme.spacing(4)})`,

	fontFamily: 'Roboto',
	fontSize: '1rem',
	fontWeight: 500,

	backgroundColor: 'transparent',
	color: 'inherit',
	border: 'none',

	'&:focus': { outline: 'none' },
}))

export const Button = styled('button')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	width: 40,
	height: 40,
	display: 'flex',

	backgroundColor: 'transparent',
	color: 'inherit',
	border: 'none',

	svg: {
		margin: 'auto',
	},

	'svg:nth-of-type(2)': {
		display: 'none',
	},

	[theme.breakpoints.up('sm')]: {
		'svg:nth-of-type(1)': {
			display: 'none',
		},
		'svg:nth-of-type(2)': {
			display: 'block',
		},
	},
}))
