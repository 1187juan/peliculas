import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { useTheme } from './ThemeContext'
import PropTypes from 'prop-types'

export const MaterialUIConfig = ({ children }) => {
	const { theme, colors } = useTheme()

	const themeConfig = createTheme({
		palette: {
			...colors,
			mode: theme,
			primary: {
				light: colors.primary,
				main: colors.primary,
				dark: colors.primary,
				contrastText: colors.onPrimaryHigh,
			},
			secondary: {
				light: colors.secondary,
				main: colors.secondary,
				dark: colors.secondary,
				contrastText: colors.onSurfaceMedium,
			},

			background: {
				paper: colors.surface,
				default: colors.bg,
			},
		},
		components: {
			MuiButton: {
				defaultProps: {
					disableElevation: true,
					size: 'large',
				},
			},
			MuiSnackbar: {
				styleOverrides: {
					root: {
						'& .MuiSnackbarContent-root': {
							backgroundColor: colors.onSurfaceHigh,
							color: colors.surface,
						},
					},
				},
			},

			MuiTooltip: {
				styleOverrides: {
					tooltip: {
						backgroundColor: colors.onSurfaceHigh,
						color: colors.surface,
					},
				},
			},
			MuiAppBar: {
				defaultProps: {
					elevation: 0,
				},
				styleOverrides: {
					root: {
						backgroundColor: colors.surface,
						color: colors.onSurfaceHigh,
					},
				},
			},
			MuiToolbar: {
				styleOverrides: {
					root: {
						maxWidth: '1024px',
						width: '100%',
						marginLeft: 'auto',
						marginRight: 'auto',
						paddingLeft: '16px',
						paddingRight: '16px',
						justifyContent: 'space-between',
						gap: '1rem',
						'@media screen and (min-width:601px)': {
							paddingLeft: '32px',
							paddingRight: '32px',
						},
					},
				},
			},
			MuiCard: {
				styleOverrides: {
					root: {
						backgroundImage: 'none',
					},
				},
			},

			MuiLink: {
				defaultProps: {
					underline: 'hover',
				},
			},
			MuiTextField: {
				defaultProps: {
					variant: 'standard',
				},
			},
		},

		typography: {
			fontSize: 16,
			body1: {
				fontSize: 16,
			},
			button: {
				textTransform: 'none',
			},
		},
		shape: {
			borderRadius: 4,
		},
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 992,
				lg: 1200,
				xl: 1536,
			},
		},
	})
	return (
		<ThemeProvider theme={themeConfig}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	)
}

MaterialUIConfig.propTypes = {
	children: PropTypes.node.isRequired,
}
