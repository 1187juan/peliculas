import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export const PublicRoutes = () => {
	const { isLogin } = useAuth()
	const lastPath = localStorage.getItem('lastPath') ?? '/'

	return isLogin ? <Navigate to={lastPath} /> : <Outlet />
}
