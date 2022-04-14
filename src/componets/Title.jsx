import { Box } from '@mui/system'
import PropTypes from 'prop-types'

const fontSizes = {
	h1: 'calc(1.375rem + 1.5vw)',
	h2: 'calc(1.325rem + 0.9vw)',
	h3: 'calc(1.3rem + 0.6vw)',
	h4: 'calc(1.275rem + 0.3vw)',
	h5: '1.25rem',
	h6: '1rem',
}

const titleStyle = {
	marginTop: 0,
	marginBottom: '0.5rem',
	fontFamily: 'Helvetica Now',
	lineHeight: 1.2,
	fontWeight: 800,
}

export const Title = ({ variant = 'h1', component, sx = {}, children }) => {
	return (
		<Box
			component={component || variant}
			sx={{
				...titleStyle,
				fontSize: fontSizes[variant],
				...sx,
			}}
		>
			{children}
		</Box>
	)
}

Title.propTypes = {
	variant: PropTypes.string,
	component: PropTypes.string,
	children: PropTypes.node,
	sx: PropTypes.object,
}
