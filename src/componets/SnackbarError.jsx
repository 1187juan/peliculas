import { Close, ErrorOutlineOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { MySnackbar } from './SnackbarErrorCss'

export const SnackbarError = ({ message, reset }) => {
	const [open, setOpen] = useState(!!message)
	const handleClose = () => setOpen(false)
	const onExit = () => reset()

	useEffect(() => setOpen(!!message), [message])

	if (!message) return null

	return (
		<MySnackbar
			open={open}
			onClose={handleClose}
			TransitionProps={{
				onExit,
			}}
			message={
				<>
					<ErrorOutlineOutlined color='inherit' />
					<span>{message}</span>
				</>
			}
			action={
				<IconButton color='inherit' size='small' onClick={handleClose}>
					<Close />
				</IconButton>
			}
		/>
	)
}

SnackbarError.propTypes = {
	message: PropTypes.string,
	reset: PropTypes.func.isRequired,
}
