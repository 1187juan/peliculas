import { FavoriteRounded } from '@mui/icons-material'
import { useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import { IconButtonIntallPWA } from './IconButtonIntallPWA'
import { IconButtonLink } from './IconButtonLink'
import { IconButtonThemeChange } from './IconButtonThemeChange'
import { IconButtonUser } from './IconButtonUser'

export const HeaderMenu = () => {
	const isMobile = useMediaQuery('(max-width:599px)')

	if (isMobile) return null

	return (
		<Box sx={{ display: 'flex', gap: '1rem' }}>
			<IconButtonLink to='/saved-movies' icon={<FavoriteRounded />} />
			<IconButtonThemeChange />
			<IconButtonIntallPWA />
			<IconButtonUser />
		</Box>
	)
}
