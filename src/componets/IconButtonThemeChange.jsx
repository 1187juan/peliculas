import { DarkModeRounded, LightModeRounded } from '@mui/icons-material'
import { useTheme } from '../contexts/ThemeContext'
import { IconButton } from './IconButton'

export const IconButtonThemeChange = () => {
	const { theme, toggleTheme } = useTheme()
	return (
		<IconButton
			onClick={toggleTheme}
			icon={theme === 'light' ? <LightModeRounded /> : <DarkModeRounded />}
		/>
	)
}
