import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavMobile } from '../componets/NavMobile'
import { Header } from '../componets/Header'
import { MovieDetails } from '../componets/MovieDetails'
import { Error404 } from '../pages/Error404'
import { Home } from '../pages/Home'
import { Main } from './AppRouterCss'
import { GeneralRoutes } from './GeneralRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'
import { Signup } from '../pages/Signup'
import { Login } from '../pages/Login'
import { ForgotPassword } from '../pages/ForgotPassword'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Header />
			<Main>
				<Routes>
					<Route element={<PrivateRoutes />}>
						<Route path='/saved-movies' element={<h1>Saved Movies</h1>} />
					</Route>
					<Route element={<PublicRoutes />}>
						<Route path='/login' element={<Login />} />
						<Route path='/signup' element={<Signup />} />
						<Route path='/forgot-password' element={<ForgotPassword />} />
					</Route>
					<Route element={<GeneralRoutes />}>
						<Route path='/' element={<Home />} />
						<Route path='/movie/:movieId' element={<MovieDetails />} />
						<Route path='/*' element={<Error404 />} />
					</Route>
				</Routes>
			</Main>
			<NavMobile />
		</BrowserRouter>
	)
}
