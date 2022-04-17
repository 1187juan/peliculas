import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
	FormControl,
	FormHelperText,
	InputLabel,
	Input,
	InputAdornment,
	IconButton,
} from '@mui/material'
import { useState } from 'react'
import PropTypes from 'prop-types'

export const InputPasswordConfirm = ({ error }) => {
	const [value, setValue] = useState('')
	const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
	const isError = !!error

	return (
		<FormControl variant='standard'>
			<InputLabel error={isError}>Confirmar contraseña</InputLabel>
			<Input
				name='passwordConfirm'
				type={showPasswordConfirm ? 'text' : 'password'}
				placeholder='Confirma tú contraseña'
				value={value}
				onChange={(e) => {
					const passwordConfirm = e.currentTarget.value
					const passwordConfirmAfter = passwordConfirm.trim()
						? passwordConfirm
						: ''

					return setValue(passwordConfirmAfter)
				}}
				endAdornment={
					<InputAdornment position='end'>
						<IconButton
							aria-label='toggle password visivility'
							onClick={() => setShowPasswordConfirm((prevValue) => !prevValue)}
							onMouseDown={(e) => e.preventDefault()}
						>
							{showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				}
			/>
			{isError && <FormHelperText error={isError}>{error}</FormHelperText>}
		</FormControl>
	)
}

InputPasswordConfirm.propTypes = {
	error: PropTypes.string,
}
