import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ButtonLink } from './IconButtonLinkCss'

export const IconButtonLink = ({ icon, to }) => {
	return (
		<ButtonLink LinkComponent={Link} to={to}>
			{icon}
		</ButtonLink>
	)
}

IconButtonLink.propTypes = {
	icon: PropTypes.element.isRequired,
	to: PropTypes.string.isRequired,
}
