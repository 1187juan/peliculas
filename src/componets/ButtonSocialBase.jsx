import { Button } from './ButtonSocialBaseCss'
import PropTypes from 'prop-types'

export const ButtonSocialBase = ({ icon, primary, onClick, disabled }) => {
	return (
		<Button onClick={onClick} disabled={disabled}>
			{icon}
			<span>{primary}</span>
		</Button>
	)
}

ButtonSocialBase.propTypes = {
	icon: PropTypes.element.isRequired,
	primary: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
}
