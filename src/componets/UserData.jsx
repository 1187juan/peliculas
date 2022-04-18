import { Alert, Button } from '@mui/material'
import PropTypes from 'prop-types'
import { useAuth } from '../contexts/AuthContext'
import { useUserData } from '../hooks/UseUserData'
import { LogoLoading } from './LogoLoading'

export const UserDataProvider = ({ children }) => {
	const { currentUser } = useAuth()
	const uid = currentUser?.uid ?? null

	const { isLoading, error } = useUserData(uid)

	if (isLoading) return <LogoLoading />

	return (
		<>
			{error && (
				<Alert
					severity='error'
					action={
						<Button color='inherit' onClick={() => window.location.reload()}>
							Reintentar
						</Button>
					}
				>
					{error.message}
				</Alert>
			)}
			{children}
		</>
	)
}

UserDataProvider.propTypes = {
	children: PropTypes.node,
}
