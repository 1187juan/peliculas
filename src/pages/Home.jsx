import { useSearchParams } from 'react-router-dom'
import { HomeBackgroundVideo } from '../componets/HomeBackgroundVideo'
import { MoviesGrid } from '../componets/MoviesGrid'
import { UseDebounced } from '../hooks/UseDebounced'
export const Home = () => {
	const [searchParams] = useSearchParams()
	const search = searchParams.get('search')
	const searchDebounced = UseDebounced(search) ?? ''

	return (
		<>
			{!searchDebounced && <HomeBackgroundVideo />}
			<MoviesGrid key={searchDebounced} search={searchDebounced} />
		</>
	)
}
