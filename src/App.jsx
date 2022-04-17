import { AppRouter } from './routers/AppRouter'
import { ThemeProvider } from './contexts/ThemeContext'
import { MaterialUIConfig } from './contexts/MaterialUIConfig'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { AuthProvider } from './contexts/AuthContext'
import { UserDataProvider } from './componets/UserData'

const queryClient = new QueryClient()

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<MaterialUIConfig>
					<AuthProvider>
						<UserDataProvider>
							<AppRouter />
						</UserDataProvider>
					</AuthProvider>
				</MaterialUIConfig>
			</ThemeProvider>
			<ReactQueryDevtools />
		</QueryClientProvider>
	)
}
