import { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { validateEmail } from '../helpers/validator'
import errorsAuth from '../data/errors-auth.json'
import { SnackbarError } from './SnackbarError'
import { ButtonsBox, Form, FormBox } from './RegisterEmailCss'
import { CSSTransition } from 'react-transition-group'
import { Button, CircularProgress } from '@mui/material'
import { InputEmail } from './InputEmail'
import { InputPassword } from './InputPassword'
import { InputPasswordConfirm } from './InputPasswordConfirm'

export const RegisterEmail = () => {
	const [section, setSection] = useState('email')
	const slidePrimaryRef = useRef(null)
	const slideSecondaryRef = useRef(null)
	const { signup } = useAuth()
	const [loading, setLoading] = useState(false)
	const [valueEmail, setValueEmail] = useState('')

	const initialErrors = {
		email: null,
		password: null,
		passwordConfirm: null,
		snackbar: null,
	}
	const [errors, setErrors] = useState(initialErrors)
	const newError = (error) => setErrors({ ...initialErrors, ...error })
	const resetErrors = () => setErrors(initialErrors)

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			resetErrors()
			const email = e.currentTarget.email?.value ?? valueEmail
			const password = e.currentTarget.password?.value
			const passwordConfirm = e.currentTarget.passwordConfirm?.value

			if (!email.trim())
				return newError({ email: 'Este campo no puede estar vacío.' })

			if (!validateEmail(email))
				return newError({ email: 'No es un correo electrónico valido.' })

			if (section === 'email') {
				setValueEmail(email)
				return setSection('passwords')
			}

			if (!password.trim())
				return newError({ password: 'Este campo no puede estar vacío.' })

			if (password.length < 6)
				return newError({
					password: 'La contraseña debe tener almenos 6 caracteres.',
				})

			if (password !== passwordConfirm)
				return newError({
					passwordConfirm: 'No es igual a la contraseña.',
				})

			setLoading(true)

			return await signup(email, password)
		} catch (e) {
			setLoading(false)
			const errorMessage = errorsAuth[e.code]

			if (errorMessage) return newError({ snackbar: errorMessage })
			return newError({ snackbar: e.message })
		}
	}

	return (
		<>
			<SnackbarError message={errors.snackbar} reset={resetErrors} />
			<Form onSubmit={handleSubmit}>
				<CSSTransition
					classNames='slide-primary'
					in={section === 'email'}
					nodeRef={slidePrimaryRef}
					timeout={300}
					unmountOnExit
				>
					<FormBox ref={slidePrimaryRef}>
						<InputEmail error={errors.email} initialValue={valueEmail} />

						<Button type='submit' variant='contained' size='large'>
							Continuar
						</Button>
					</FormBox>
				</CSSTransition>
				<CSSTransition
					classNames='slide-secondary'
					in={section === 'passwords'}
					nodeRef={slideSecondaryRef}
					timeout={500}
					unmountOnExit
				>
					<FormBox ref={slideSecondaryRef}>
						<InputPassword error={errors.password} />
						<InputPasswordConfirm error={errors.passwordConfirm} />
						<ButtonsBox>
							<Button
								fullWidth
								onClick={() => setSection('email')}
								size='large'
								type='button'
							>
								Regresar
							</Button>
							<Button
								disabled={loading}
								fullWidth
								size='large'
								startIcon={loading ? <CircularProgress size='1.5rem' /> : null}
								type='submit'
								variant='contained'
							>
								Continuar
							</Button>
						</ButtonsBox>
					</FormBox>
				</CSSTransition>
			</Form>
		</>
	)
}
