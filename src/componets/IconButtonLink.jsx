import styled from '@emotion/styled'
import { ButtonBase } from '@mui/material'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = styled(ButtonBase)(({ theme }) => ({
	width: 40,
	height: 40,
	overflow: 'hidden',

	backgroundColor: theme.palette.light,
	borderRadius: '50%',

	svg: {
		fontSize: 24,
	},
}))

export const IconButtonLink = ({ icon, to }) => {
	return (
		<Button LinkComponent={Link} to={to}>
			{icon}
		</Button>
	)
}

IconButtonLink.propTypes = {
	icon: PropTypes.element.isRequired,
	to: PropTypes.string.isRequired,
}
