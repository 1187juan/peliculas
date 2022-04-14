import { useSearchParams } from 'react-router-dom'
import { HomeVideoFullScreen } from '../componets/HomeVideoFullScreen'
import { MoviesGrid } from '../componets/MoviesGrid'
import { UseDebounced } from '../hooks/UseDebounced'
export const Home = () => {
	const [searchParams] = useSearchParams()
	const search = searchParams.get('search')
	const searchDebounced = UseDebounced(search) ?? ''

	return (
		<>
			{!searchDebounced && <HomeVideoFullScreen />}
			<MoviesGrid key={searchDebounced} search={searchDebounced} />
		</>
	)
}
