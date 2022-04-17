import { Typography } from '@mui/material'
import { AccessFacebook } from '../componets/AccessFacebook'
import { AccessGoogle } from '../componets/AccessGoogle'
import { MyLink } from '../componets/MyLink'
import { RegisterEmail } from '../componets/RegisterEmail'
import { Title } from '../componets/Title'
import { Container, SocialBox, Divider } from './SignupCss'

export const Signup = () => {
	return (
		<Container>
			<Title variant='h4' component='h1'>
				Registro
			</Title>
			<Typography color='text.secondary' sx={{ paddingBottom: '2rem' }}>
				Ya tienes cuanta? <MyLink to='/login'>Accede</MyLink>
			</Typography>
			<SocialBox>
				<AccessGoogle />
				<AccessFacebook />
			</SocialBox>
			<Divider />
			<RegisterEmail />
		</Container>
	)
}
