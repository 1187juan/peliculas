import styled from '@emotion/styled'
import { SearchRounded } from '@mui/icons-material'
import { useRef } from 'react'
import {
	createSearchParams,
	useNavigate,
	useSearchParams,
} from 'react-router-dom'
import { LogoIcon } from './logos/LogoIcon'

const Form = styled('form')(({ theme }) => ({
	position: 'relative',
	width: '100%',
	height: '40px',
	display: 'flex',
	alignItems: 'center',

	backgroundColor: theme.palette.light,
	borderRadius: theme.shape.borderRadius,

	'&:hover': {
		backgroundColor: theme.palette.outline,
	},

	[theme.breakpoints.up('sm')]: {
		width: 'auto',
	},
}))

const Input = styled('input')(({ theme }) => ({
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

const Button = styled('button')(({ theme }) => ({
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

export const HeaderSearch = () => {
	const [searchParams] = useSearchParams()
	const navigate = useNavigate()
	const inputRef = useRef()
	const beforeSearch = searchParams.get('search') ?? ''

	const handleSubmit = (e) => {
		e.preventDefault()
		inputRef.current.blur()
	}

	const handleChange = (e) => {
		const value = e.target.value
		const search = createSearchParams({ search: value }).toString()

		navigate({
			pathname: '/',
			search,
		})
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Input
				placeholder='Buscar'
				type='text'
				value={beforeSearch}
				onChange={handleChange}
				ref={inputRef}
			/>
			<Button>
				<LogoIcon />
				<SearchRounded />
			</Button>
		</Form>
	)
}
