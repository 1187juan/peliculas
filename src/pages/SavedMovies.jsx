import { nanoid } from 'nanoid'
import { useQueryClient } from 'react-query'
import { Footer } from '../componets/Footer'
import { Void } from '../componets/icons/Void'
import { ListMoviesCard } from '../componets/ListMoviesCard'
import { Title } from '../componets/Title'
import { useAuth } from '../contexts/AuthContext'
import { Container, ListMovies } from './SavedMoviesCss'

export const SavedMovies = () => {
	const queryClient = useQueryClient()
	const { currentUser } = useAuth()
	const uid = currentUser?.uid
	const { savedMovies } = queryClient.getQueryData(['userData', uid])
	const isSavedMovies = !!savedMovies.length

	if (!isSavedMovies)
		return (
			<>
				<Container>
					<Void width='100%' />
					<Title variant='h4' component='h1' sx={{ textAlign: 'center' }}>
						Aun no has guardado películas.
					</Title>
				</Container>
				<Footer />
			</>
		)

	return (
		<>
			<ListMovies>
				{savedMovies.map((movie) => (
					<ListMoviesCard
						key={nanoid()}
						id={movie.id}
						title={movie.title}
						imgUrl={movie.posterUrl300}
					/>
				))}
			</ListMovies>
			<Footer />
		</>
	)
}
