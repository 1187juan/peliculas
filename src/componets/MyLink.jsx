import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const MyLink = styled(Link)(({ theme }) => ({
	fontSize: '1rem',
	fontWeight: 500,
	fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
	textDecoration: 'none',

	color: theme.palette.primary.main,
}))
