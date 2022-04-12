import { DeleteRounded, LoginRounded, PersonRounded } from '@mui/icons-material'
import { ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material'
import { useState } from 'react'
import { IconButton } from './IconButton'
import { IconButtonLink } from './IconButtonLink'

export const IconButtonUser = () => {
	const isLogin = false
	const [anchorE1, setAnchorE1] = useState(null)
	const open = !!anchorE1
	const handleClick = (e) => setAnchorE1(e.currentTarget)
	const handleClose = () => setAnchorE1(null)

	const handleLogout = () => console.log('Logout')
	const handleDeleteAccount = () => console.log('Delete account')

	if (!isLogin) return <IconButtonLink to='/login' icon={<PersonRounded />} />

	return (
		<>
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
