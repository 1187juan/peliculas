import styled from '@emotion/styled'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from '../componets/Footer'
import { Header } from '../componets/Header'
import { Home } from '../pages/Home'
import { GeneralRoutes } from './GeneralRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

const Main = styled('main')(({ theme }) => ({
	backgroundColor: 'silver',
	minHeight: 'calc(100vh - 112px)',
	overflow: 'hidden',

	[theme.breakpoints.up('sm')]: {
		minHeight: 'calc(100vh - 64px)',
		paddingBottom: 0,
	},
}))

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
						<Route path='/movie/:movieId' element={<h1>Movie Details</h1>} />
						<Route path='/*' element={<h1>Error 404</h1>} />
					</Route>
				</Routes>
			</Main>
			<Footer />
		</BrowserRouter>
	)
}
