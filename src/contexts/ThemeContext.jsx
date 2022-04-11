import { createContext, useContext, useEffect, useState } from 'react'
import themeColors from '../data/theme-colors.json'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(
		() => localStorage.getItem('peliculas-theme') ?? 'light'
	)

	const toggleTheme = () => {
		const themeNew = theme === 'light' ? 'dark' : 'light'
		setTheme(themeNew)
		localStorage.setItem('peliculas-theme', themeNew)
	}

	const colors = themeColors[theme]

	const value = { theme, toggleTheme, colors }

	useEffect(() => {
		document
			.querySelector("meta[name='theme-color']")
			.setAttribute('content', colors.surface)
	}, [colors.surface])

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
}
