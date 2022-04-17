import { Typography } from '@mui/material'
import { AccessFacebook } from '../componets/AccessFacebook'
import { AccessGoogle } from '../componets/AccessGoogle'
import { MyLink } from '../componets/MyLink'
import { Title } from '../componets/Title'
import { Container, SocialBox, Divider } from './LoginCss'
import { LoginEmail } from './LoginEmail'

export const Login = () => {
	return (
		<Container>
			<Title variant='h4' component='h1'>
				Login
			</Title>
			<Typography color='text.secondary' sx={{ paddingBottom: '2rem' }}>
				No tienes cuanta? <MyLink to='/signup'>Registrate</MyLink>
			</Typography>
			<SocialBox>
				<AccessGoogle />
				<AccessFacebook />
			</SocialBox>
			<Divider />
			<LoginEmail />
		</Container>
	)
}
