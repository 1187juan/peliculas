import styled from '@emotion/styled'
import { ButtonBase } from '@mui/material'

export const Button = styled(ButtonBase)(({ theme }) => ({
	width: 'auto',
	padding: '1rem 1.5rem',
	display: 'inline-grid',
	gridTemplateColumns: 'auto 1fr',
	gap: '1rem',

	fontWeight: 500,
	fontSize: '1rem',
	fontFamily: 'Roboto, Helvetica, Arial, sans-serif',

	color: 'text.primary',
	backgroundColor: theme.palette.outline,
	borderRadius: theme.spacing(0.5),

	'&:hover': {
		filter: 'brightness(1.05)',
	},
	'&:disabled': {
		color: theme.palette.onSurfaceDisabled,
	},
}))
