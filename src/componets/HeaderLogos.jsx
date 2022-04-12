import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Logo } from './logos/Logo'

const CustomLink = styled(Link)(({ theme }) => ({
	display: 'none',

	color: theme.palette.onSurfaceHigh,

	svg: {
		height: '40px',
	},

	[theme.breakpoints.up('sm')]: {
		display: 'block',
	},
}))

export const HeaderLogos = () => {
	return (
		<CustomLink to='/'>
			<Logo />
		</CustomLink>
	)
}
