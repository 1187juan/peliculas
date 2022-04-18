import { FavoriteRounded } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useQueryClient } from 'react-query'
import { Link } from 'react-router-dom'
import { Title } from './Title'
import { Container, Content, Media } from './TopMoviesBannerCss'

export const TopMoviesBanner = () => {
	const queryClient = useQueryClient()
	const { pages } = queryClient.getQueryData(['movies', null])

	const randomNumber = (Math.random() * (19 - 0) + 0).toFixed()

	const randomMovie = pages[0].movies[randomNumber * 1]

	return (
		<Container>
			<Content>
				<Title variant='h4' component='h1'>
					Comienza a guarda tús películas favoritas.
				</Title>
				<Button
					variant='contained'
					startIcon={<FavoriteRounded />}
					LinkComponent={Link}
					to='/saved-movies'
				>
					Guardados
				</Button>
			</Content>
			<Media img={randomMovie.backdropUrl500} />
		</Container>
	)
}
