import { FavoriteRounded, HomeRounded } from '@mui/icons-material'
import { useMediaQuery } from '@mui/material'
import { Container } from './NavMobileCss'
import { IconButtonIntallPWA } from './IconButtonIntallPWA'
import { IconButtonLink } from './IconButtonLink'
import { IconButtonThemeChange } from './IconButtonThemeChange'
import { IconButtonUser } from './IconButtonUser'

export const NavMobile = () => {
	const isNotMobile = useMediaQuery('(min-width: 600px)')

	if (isNotMobile) return null

	return (
		<Container>
			<IconButtonLink to='/' icon={<HomeRounded />} />
			<IconButtonLink to='/saved-movies' icon={<FavoriteRounded />} />
			<IconButtonThemeChange />
			<IconButtonIntallPWA />
			<IconButtonUser />
		</Container>
	)
}
