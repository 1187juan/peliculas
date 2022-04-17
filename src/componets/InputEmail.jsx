import { TextField } from '@mui/material'
import { useState } from 'react'
import PropTypes from 'prop-types'

export const InputEmail = ({ error, initialValue = '' }) => {
	const [value, setValue] = useState(initialValue)
	return (
		<TextField
			label='Correo electrónico'
			name='email'
			type='email'
			placeholder='Tú correo electrónico.'
			value={value}
			onChange={(e) => setValue(e.currentTarget.value)}
			error={!!error}
			helperText={error}
			fullWidth
		/>
	)
}

InputEmail.propTypes = {
	error: PropTypes.string,
	initialValue: PropTypes.string,
}
