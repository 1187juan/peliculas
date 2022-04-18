import { useEffect, useState } from 'react'
import { Close } from '@mui/icons-material'
import { IconButton, Snackbar } from '@mui/material'
import PropTypes from 'prop-types'

export const MySnackbar = ({ message, reset }) => {
	const [open, setOpen] = useState(!!message)
	const handleClose = () => setOpen(false)

	const onExit = () => reset()

	useEffect(() => setOpen(!!message), [message])

	if (!message) return null

	return (
		<Snackbar
			open={open}
			onClose={handleClose}
			message={message}
			TransitionProps={{ onExit }}
			action={
				<IconButton color='inherit' size='small' onClick={handleClose}>
					<Close />
				</IconButton>
			}
		/>
	)
}

MySnackbar.propTypes = {
	message: PropTypes.string.isRequired,
	reset: PropTypes.func.isRequired,
}
