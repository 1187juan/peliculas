import PropTypes from 'prop-types'
import { Button } from './IconButtonCss'

export const IconButton = ({ icon, onClick }) => {
	return <Button onClick={onClick}>{icon}</Button>
}

IconButton.propTypes = {
	icon: PropTypes.element.isRequired,
	onClick: PropTypes.func,
}
