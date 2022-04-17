import styled from '@emotion/styled'
import { Snackbar } from '@mui/material'

export const MySnackbar = styled(Snackbar)(({ theme }) => ({
	'& .MuiSnackbarContent-message': {
		display: 'flex',
		alignItems: 'center',
		gap: '1rem',
		textAlign: 'left',
	},
	'& .MuiSnackbarContent-message svg': {
		color: theme.palette.error.dark,
	},
}))
