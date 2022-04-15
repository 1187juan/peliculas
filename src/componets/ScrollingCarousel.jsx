import { ArrowLeftRounded, ArrowRightRounded } from '@mui/icons-material'
import PropTypes from 'prop-types'
import { ArrowBox, Carrousel } from './ScrollingCarouselCss'

export const ScrollingCarousel = ({ children }) => {
	return (
		<Carrousel
			rightIcon={
				<ArrowBox role='button'>
					<ArrowRightRounded />
				</ArrowBox>
			}
			leftIcon={
				<ArrowBox role='button' invert>
					<ArrowLeftRounded />
				</ArrowBox>
			}
		>
			{children}
		</Carrousel>
	)
}

ScrollingCarousel.propTypes = {
	children: PropTypes.node.isRequired,
}
