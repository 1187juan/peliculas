import styled from '@emotion/styled'
import { ButtonBase } from '@mui/material'

export const Button = styled(ButtonBase)(({ theme }) => ({
	width: 40,
	height: 40,
	overflow: 'hidden',

	backgroundColor: theme.palette.outline,
	borderRadius: '50%',

	svg: {
		fontSize: 24,
	},
}))
