import { Container } from './LogoLoadingCss'
import Lottie from 'lottie-react'
import logoLoading from '../lotties/logoLoading.json'
import { Title } from './Title'

export const LogoLoading = () => {
	return (
		<Container>
			<Lottie animationData={logoLoading} autoPlay loop />
			<Title variant='h4' component='h1'>
				Encuentra reseñas de miles de películas y dónde poder verlas.
			</Title>
		</Container>
	)
}
