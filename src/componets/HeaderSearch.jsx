import { SearchRounded } from '@mui/icons-material'
import { useRef } from 'react'
import {
	createSearchParams,
	useNavigate,
	useSearchParams,
} from 'react-router-dom'
import { Button, Form, Input } from './HeaderSearchCss'
import { LogoIcon } from './logos/LogoIcon'

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
