import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { GeneralRoutes } from './GeneralRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<header>
				<nav>
					<Link to='/saved-movies'>Saved Movies </Link>
					<Link to='/login'>Login </Link>
					<Link to='/signup'>Signup </Link>
					<Link to='/forgot-password'>Forgot Password </Link>
					<Link to='/'>Home </Link>
					<Link to='/movie/1'>Movie 1 </Link>
					<Link to='/movies'>404 </Link>
				</nav>
			</header>
			<main>
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
						<Route path='/movie/:movieId' element={<h1>Movie Details</h1>} />
						<Route path='/*' element={<h1>Error 404</h1>} />
					</Route>
				</Routes>
			</main>
		</BrowserRouter>
	)
}
