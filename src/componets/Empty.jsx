import styled from '@emotion/styled'
import { MovieRounded } from '@mui/icons-material'
import { Box } from '@mui/system'
import { Title } from './Title'
import PropTypes from 'prop-types'

const MainContent = styled('section')(({ theme }) => ({
	marginTop: 'calc(50vh - 64px)',
	padding: '16px',
	textAlign: 'center',
	height: '100%',
	transform: 'translateY(-50%)',
}))

export const Empty = ({ search }) => {
	return (
		<MainContent>
			<MovieRounded sx={{ fontSize: '128px' }} />
			<Title variant='h4' component='h1' sx={{ color: 'onSurfaceMedium' }}>
				Sin resultados para{' '}
				<Box component='span' sx={{ color: 'onSurfaceHigh' }}>
					{search}
				</Box>
			</Title>
		</MainContent>
	)
}

Empty.propTypes = {
	search: PropTypes.string.isRequired,
}
