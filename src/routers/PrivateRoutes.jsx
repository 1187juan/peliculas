import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export const PrivateRoutes = () => {
	const { isLogin } = useAuth()
	const location = useLocation()

	localStorage.setItem('lastPath', location.pathname)

	return isLogin ? <Outlet /> : <Navigate to='/login' />
}
