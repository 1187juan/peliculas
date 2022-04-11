import { Outlet, useLocation } from 'react-router-dom'

export const GeneralRoutes = () => {
	const location = useLocation()

	localStorage.setItem('lastPath', location.pathname)

	return <Outlet />
}
