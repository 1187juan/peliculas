import styled from '@emotion/styled'
import { FavoriteRounded, HomeRounded } from '@mui/icons-material'
import { useMediaQuery } from '@mui/material'
import { IconButtonIntallPWA } from './IconButtonIntallPWA'
import { IconButtonLink } from './IconButtonLink'
import { IconButtonThemeChange } from './IconButtonThemeChange'
import { IconButtonUser } from './IconButtonUser'

const Box = styled('footer')(({ theme }) => ({
	position: 'sticky',
	bottom: 0,

	width: '100%',
	height: 56,
	padding: '0px 1rem',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',

	backgroundColor: theme.palette.surface,
}))

export const Footer = () => {
	const isNotMobile = useMediaQuery('(min-width: 600px)')

	if (isNotMobile) return null

	return (
		<Box>
			<IconButtonLink to='/' icon={<HomeRounded />} />
			<IconButtonLink to='/saved-movies' icon={<FavoriteRounded />} />
			<IconButtonThemeChange />
			<IconButtonIntallPWA />
			<IconButtonUser />
		</Box>
	)
}
