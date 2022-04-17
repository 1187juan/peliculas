import { DeleteRounded, LoginRounded, PersonRounded } from '@mui/icons-material'
import { ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { IconButton } from './IconButton'
import { IconButtonLink } from './IconButtonLink'
import { SnackbarError } from './SnackbarError'

export const IconButtonUser = () => {
	const { isLogin, deleteAccount, logout } = useAuth()
	const [anchorE1, setAnchorE1] = useState(null)
	const [error, setError] = useState(null)
	const open = !!anchorE1
	const handleClick = (e) => setAnchorE1(e.currentTarget)
	const handleClose = () => setAnchorE1(null)

	const handleDeleteAccount = async () => {
		try {
			await deleteAccount()
		} catch (e) {
			console.log(e.message)
			setError('Error al eliminar la cuenta, intentalo más tarde.')
		} finally {
			handleClose()
		}
	}

	const handleLogout = async () => {
		try {
			await logout()
		} catch (e) {
			console.log(e.message)
			setError('Error al salir de la cuenta, intentalo más tarde.')
		} finally {
			handleClose()
		}
	}

	if (!isLogin) return <IconButtonLink to='/login' icon={<PersonRounded />} />

	return (
		<>
			<SnackbarError message={error} reset={() => setError(null)} />
			<IconButton onClick={handleClick} icon={<PersonRounded />} />
			<Menu open={open} onClose={handleClose} anchorEl={anchorE1}>
				<MenuItem onClick={handleLogout}>
					<ListItemIcon>
						<LoginRounded />
					</ListItemIcon>
					<ListItemText primary='Salir' />
				</MenuItem>
				<MenuItem onClick={handleDeleteAccount}>
					<ListItemIcon>
						<DeleteRounded />
					</ListItemIcon>
					<ListItemText primary='Eliminar cuenta' />
				</MenuItem>
			</Menu>
		</>
	)
}
