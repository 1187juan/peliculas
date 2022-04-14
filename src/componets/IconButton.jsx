import styled from '@emotion/styled'
import { ButtonBase } from '@mui/material'
import PropTypes from 'prop-types'

const Button = styled(ButtonBase)(({ theme }) => ({
	width: 40,
	height: 40,
	overflow: 'hidden',

	backgroundColor: theme.palette.outline,
	borderRadius: '50%',

	svg: {
		fontSize: 24,
	},
}))

export const IconButton = ({ icon, onClick }) => {
	return <Button onClick={onClick}>{icon}</Button>
}

IconButton.propTypes = {
	icon: PropTypes.element.isRequired,
	onClick: PropTypes.func,
}
