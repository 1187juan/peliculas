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
						<Route path='/login' element={<h1>Login</h1>} />
						<Route path='/signup' element={<h1>Signup</h1>} />
						<Route path='/forgot-password' element={<h1>Forgot Password</h1>} />
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
