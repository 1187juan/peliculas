import { HeaderLogos } from './HeaderLogos'
import { HeaderSearch } from './HeaderSearch'
import { Navbar } from './Navbar'
import { HeaderMenu } from './HeaderMenu'

export const Header = () => {
	return (
		<Navbar>
			<HeaderLogos />
			<HeaderSearch />
			<HeaderMenu />
		</Navbar>
	)
}
