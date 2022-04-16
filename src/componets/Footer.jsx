import { Typography } from '@mui/material'
import { Container } from './FooterCss'
import { Logo } from './logos/Logo'

export const Footer = () => {
	return (
		<Container>
			<Typography variant='subtitle1' color='text.secondary' textAlign='center'>
				from
			</Typography>
			<Logo color='currentColor' height='2rem' />
		</Container>
	)
}
