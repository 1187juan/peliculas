import { AppRouter } from './routers/AppRouter'
import { ThemeProvider } from './contexts/ThemeContext'
import { MaterialUIConfig } from './contexts/MaterialUIConfig'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<MaterialUIConfig>
					<AppRouter />
				</MaterialUIConfig>
			</ThemeProvider>
			<ReactQueryDevtools />
		</QueryClientProvider>
	)
}
