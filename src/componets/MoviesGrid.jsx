import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useMovies } from '../hooks/UseMovies'
import { Empty } from './Empty'
import { ListMovies } from './ListMovies'
import { ListMoviesCard } from './ListMoviesCard'

export const MoviesGrid = ({ search }) => {
	const { data, isLoading, hasNextPage, fetchNextPage } = useMovies(search)

	const movies = data?.pages.map((page) => page.movies).flat() ?? []
	const isMovies = !!movies.length

	if (!isMovies && !isLoading) return <Empty search={search} />

	return (
		<InfiniteScroll
			dataLength={movies.length}
			hasMore={hasNextPage | isLoading}
			next={() => fetchNextPage()}
			loader={
				<Box sx={{ margin: '8px auto', width: '48px' }}>
					<CircularProgress size={48} />
				</Box>
			}
		>
			<ListMovies>
				{movies.map((movie) => (
					<ListMoviesCard
						id={movie.id}
						imageUrl={movie.posterUrl_300}
						key={nanoid()}
						title={movie.title}
					/>
				))}
			</ListMovies>
		</InfiniteScroll>
	)
}

MoviesGrid.propTypes = {
	search: PropTypes.string.isRequired,
}
