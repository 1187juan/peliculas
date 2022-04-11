import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const PrivateRoutes = () => {
	const isLogin = false
	const location = useLocation()

	localStorage.setItem('lastPath', location.pathname)

	return isLogin ? <Outlet /> : <Navigate to='/login' />
}
