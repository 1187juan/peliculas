import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { validateEmail } from '../helpers/validator'
import errorsAuth from '../data/errors-auth.json'
import { SnackbarError } from '../componets/SnackbarError'
import { Container, Form } from './ForgotPasswordCss'
import { Alert, AlertTitle, Button, CircularProgress } from '@mui/material'
import { InputEmail } from '../componets/InputEmail'
import { Title } from '../componets/Title'

export const ForgotPassword = () => {
	const { resetPassword } = useAuth()
	const initialErrors = { email: null, snackbar: null }
	const [errors, setErrors] = useState(initialErrors)
	const resetErrors = () => setErrors(initialErrors)
	const newError = (error) => setErrors({ ...initialErrors, ...error })
	const [emailAfter, setEmailAfter] = useState(null)

	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			resetErrors()
			const email = e.currentTarget.email.value

			if (!email.trim())
				return newError({ email: 'Este campo no puede estar vacío.' })

			if (!validateEmail(email))
				return newError({ email: 'No es un correo electrónico valido.' })

			setLoading(true)

			await resetPassword(email)
			setEmailAfter(email)
		} catch (e) {
			const errorMessage = errorsAuth[e.code]

			if (errorMessage) return newError({ snackbar: errorMessage })
			return newError({ snackbar: e.message })
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			<SnackbarError message={errors.snackbar} reset={resetErrors} />
			<Container>
				<Title variant='h4' component='h1'>
					Recuperar contraseña
				</Title>

				<Form onSubmit={handleSubmit}>
					<InputEmail error={errors.email} />
					<Button
						fullWidth
						variant='contained'
						type='submit'
						disabled={loading}
						startIcon={loading ? <CircularProgress size='1.5rem' /> : null}
					>
						Continuar
					</Button>
					<Button fullWidth type='button' onClick={() => navigate('/login')}>
						Login
					</Button>
				</Form>
				{emailAfter && (
					<Alert severity='info' sx={{ textAlign: 'left' }}>
						<AlertTitle>Revisa tú correo electrónico.</AlertTitle>
						Abre el link que enviamos a <strong>{emailAfter}</strong> para
						restablecer tú contraseña.
					</Alert>
				)}
			</Container>
		</>
	)
}
