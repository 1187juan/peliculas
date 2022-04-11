import { AppRouter } from './routers/AppRouter'
import { ThemeProvider } from './contexts/ThemeContext'
import { MaterialUIConfig } from './contexts/MaterialUIConfig'

export const App = () => {
	return (
		<ThemeProvider>
			<MaterialUIConfig>
				<AppRouter />
			</MaterialUIConfig>
		</ThemeProvider>
	)
}
