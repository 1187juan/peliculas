import { Typography } from '@mui/material'
import Lottie from 'lottie-react'
import { Title } from '../componets/Title'
import astronaut from '../lotties/astronaut.json'
import { MainContainer } from './Error404Css'

export const Error404 = () => {
	return (
		<MainContainer>
			<Lottie animationData={astronaut} loop autoPlay />
			<Title>Hmmm!</Title>
			<Typography>No encontramos lo que bucabas.</Typography>
		</MainContainer>
	)
}
