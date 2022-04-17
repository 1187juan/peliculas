import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
	FormControl,
	FormHelperText,
	IconButton,
	Input,
	InputAdornment,
	InputLabel,
} from '@mui/material'
import { useState } from 'react'
import PropTypes from 'prop-types'

export const InputPassword = ({ error }) => {
	const [value, setValue] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	return (
		<>
			<FormControl variant='standard'>
				<InputLabel error={!!error}>Contraseña</InputLabel>
				<Input
					name='password'
					type={showPassword ? 'text' : 'password'}
					placeholder='Tú contraseña'
					value={value}
					autoFocus
					onChange={(e) => {
						const password = e.currentTarget.value
						const passwordAfter = password.trim() ? password : ''

						return setValue(passwordAfter)
					}}
					endAdornment={
						<InputAdornment position='end'>
							<IconButton
								aria-label='toggle password visibility'
								onClick={() => setShowPassword((prevValue) => !prevValue)}
								onMouseDown={(e) => e.preventDefault()}
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
				/>
				{!!error && <FormHelperText error={!!error}>{error}</FormHelperText>}
			</FormControl>
		</>
	)
}

InputPassword.propTypes = {
	error: PropTypes.string,
}
