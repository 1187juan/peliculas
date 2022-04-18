import { FavoriteRounded } from '@mui/icons-material'
import { Button, CircularProgress } from '@mui/material'
import PropTypes from 'prop-types'
import { useQueryClient } from 'react-query'
import { useAuth } from '../contexts/AuthContext'
import { useUpdateUserData } from '../hooks/UseUserData'
import { MySnackbar } from './MySnackbar'
import { SnackbarError } from './SnackbarError'

export const SavedMovieButton = ({
	movieId,
	title,
	posterUrl300,
	backdropUrl300,
}) => {
	const { uid } = useAuth()
	const queryClient = useQueryClient()
	const { mutate, error, isLoading, reset, isSuccess } = useUpdateUserData(uid)

	const { savedMovies } = queryClient.getQueryData(['userData', uid])

	const isSavedMovie =
		!!savedMovies.length && savedMovies.some((movie) => movie.id === movieId)

	const savedMoviesAfter = isSavedMovie
		? savedMovies.filter((movie) => movie.id !== movieId)
		: [{ id: movieId, title, posterUrl300, backdropUrl300 }, ...savedMovies]

	const handleSavedMovies = () =>
		mutate({ uid, data: { savedMovies: savedMoviesAfter } })

	return (
		<>
			{!!error && <SnackbarError message={error.message} reset={reset} />}
			{isSuccess && (
				<MySnackbar
					message={isSavedMovie ? 'Película guardada.' : 'Película removida'}
					reset={reset}
				/>
			)}

			<Button
				startIcon={
					isLoading ? <CircularProgress size='1.5rem' /> : <FavoriteRounded />
				}
				variant='contained'
				onClick={handleSavedMovies}
				disabled={isLoading}
				color={isSavedMovie ? 'secondary' : 'primary'}
			>
				{isSavedMovie ? 'Quitar' : 'Guardar'}
			</Button>
		</>
	)
}

SavedMovieButton.propTypes = {
	movieId: PropTypes.number.isRequired,
	title: PropTypes.string,
	posterUrl300: PropTypes.string,
	backdropUrl300: PropTypes.string,
}
