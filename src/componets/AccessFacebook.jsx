import { CircularProgress } from '@mui/material'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { ButtonSocialBase } from './ButtonSocialBase'
import errorsAuth from '../data/errors-auth.json'
import { SnackbarError } from './SnackbarError'
import { FacebookIcon } from './icons/FacebookIcon'

export const AccessFacebook = () => {
	const { accessWithFacebook } = useAuth()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const handleClick = async () => {
		try {
			setLoading(true)
			await accessWithFacebook()
		} catch (e) {
			setLoading(false)

			const errorMessage = errorsAuth[e.code]
			if (errorMessage) return setError(errorMessage)

			setError(e.message)
		}
	}

	return (
		<>
			{error && <SnackbarError message={error} reset={() => setError(null)} />}
			<ButtonSocialBase
				primary='Facebook'
				onClick={handleClick}
				icon={
					loading ? (
						<CircularProgress size='1.5rem' variant='indeterminate' />
					) : (
						<FacebookIcon width='1.5rem' />
					)
				}
				disabled={loading}
			/>
		</>
	)
}
