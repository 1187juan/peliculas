import { AppBar, Slide, Toolbar, useScrollTrigger } from '@mui/material'
import PropTypes from 'prop-types'

const HideScroll = ({ children }) => {
	const trigger = useScrollTrigger()

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	)
}

HideScroll.propTypes = {
	children: PropTypes.node.isRequired,
}

export const Navbar = ({ children }) => {
	return (
		<HideScroll>
			<AppBar position='sticky'>
				<Toolbar>{children}</Toolbar>
			</AppBar>
		</HideScroll>
	)
}

Navbar.propTypes = {
	children: PropTypes.node.isRequired,
}
