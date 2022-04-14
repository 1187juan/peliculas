import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import Lottie from 'lottie-react'
import { Title } from '../componets/Title'
import astronaut from '../lotties/astronaut.json'

const MainContainer = styled('section')(({ theme }) => ({
	width: '100%',
	height: 'calc(100vh - 112px)',
	padding: '1rem',
	display: 'grid',
	placeContent: 'center',
	gridTemplateRows: '50% max-content max-content',

	textAlign: 'center',

	backgroundColor: 'rgb(0,45,56)',
	background: 'radial-gradient(circle, rgba(0,45,56,1) 0%, rgba(0,0,0,1) 100%)',
	color: theme.palette.white,

	[theme.breakpoints.up('sm')]: {
		height: 'calc(100vh - 64px)',
		padding: '2rem',
		gridTemplateRows: '65% max-content max-content',
	},
}))

export const Error404 = () => {
	return (
		<MainContainer>
			<Lottie animationData={astronaut} loop autoPlay />
			<Title>Hmmm!</Title>
			<Typography>No encontramos lo que bucabas.</Typography>
		</MainContainer>
	)
}
