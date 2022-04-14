import styled from '@emotion/styled'
import { Link as LinkRouter } from 'react-router-dom'

export const Link = styled(LinkRouter)(({ theme }) => ({
	display: 'none',

	color: theme.palette.onSurfaceHigh,

	svg: {
		height: '40px',
	},

	[theme.breakpoints.up('sm')]: {
		display: 'block',
	},
}))
