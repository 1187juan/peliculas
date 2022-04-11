import { useTheme } from '../contexts/ThemeContext'
import { Button } from '@mui/material'
export const Home = () => {
	const { theme, toggleTheme, colors } = useTheme()
	console.log(colors)

	return (
		<>
			<h1>Theme {theme}</h1>
			<h2>Theme {theme}</h2>
			<h3>Theme {theme}</h3>
			<h4>Theme {theme}</h4>
			<h5>Theme {theme}</h5>
			<h6>Theme {theme}</h6>
			<Button onClick={toggleTheme}>toggle theme </Button>
		</>
	)
}
