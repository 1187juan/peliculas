import { CircularProgress, Typography } from '@mui/material'
import { BoxProgress, Container } from './CircularProgressWithLabelCss'
import PropTypes from 'prop-types'

export const CircularProgressWithLabel = (props) => {
	return (
		<Container>
			<CircularProgress variant='determinate' {...props} />
			<BoxProgress>
				<Typography variant='caption' component='div' color='text.primary'>
					{`${Math.round(props.value)}%`}
				</Typography>
			</BoxProgress>
		</Container>
	)
}

CircularProgressWithLabel.propTypes = {
	value: PropTypes.number.isRequired,
}
