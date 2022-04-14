import { HeaderLogo } from './HeaderLogo'
import { HeaderSearch } from './HeaderSearch'
import { Navbar } from './Navbar'
import { HeaderMenu } from './HeaderMenu'

export const Header = () => {
	return (
		<Navbar>
			<HeaderLogo />
			<HeaderSearch />
			<HeaderMenu />
		</Navbar>
	)
}
