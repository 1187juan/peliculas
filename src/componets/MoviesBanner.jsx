import { useQueryClient } from 'react-query'
import { useAuth } from '../contexts/AuthContext'
import { LastSavedMovies } from './LastSavedMovies'
import { TopMoviesBanner } from './TopMoviesBanner'

export const MoviesBanner = () => {
	const { uid } = useAuth()
	const queryClient = useQueryClient()
	const { savedMovies = [] } = queryClient.getQueryData(['userData', uid]) ?? {}
	const isSavedMovies = !!savedMovies.length

	if (!isSavedMovies) return <TopMoviesBanner />

	return <LastSavedMovies movies={savedMovies} />
}
