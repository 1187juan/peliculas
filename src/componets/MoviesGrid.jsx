import { MovieRounded } from '@mui/icons-material'
import { CircularProgress } from '@mui/material'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useMovies } from '../hooks/UseMovies'
import { ListMoviesCard } from './ListMoviesCard'
import {
	BoxCircularProgress,
	ListMovies,
	EmptySpan,
	Empty,
} from './MoviesGridCss'
import { Title } from './Title'

export const MoviesGrid = ({ search }) => {
	const { data, isLoading, hasNextPage, fetchNextPage } = useMovies(search)

	const movies = data?.pages.map((page) => page.movies).flat() ?? []
	const isMovies = !!movies.length

	if (!isMovies && !isLoading)
		return (
			<Empty>
				<MovieRounded sx={{ fontSize: '128px' }} />
				<Title variant='h4' component='h1' sx={{ color: 'onSurfaceMedium' }}>
					Sin resultados para <EmptySpan>{search}</EmptySpan>
				</Title>
			</Empty>
		)

	return (
		<InfiniteScroll
			dataLength={movies.length}
			hasMore={hasNextPage | isLoading}
			next={() => fetchNextPage()}
			loader={
				<BoxCircularProgress>
					<CircularProgress size={48} />
				</BoxCircularProgress>
			}
		>
			<ListMovies>
				{movies.map((movie) => (
					<ListMoviesCard
						id={movie.id}
						imageUrl={movie.posterUrl300}
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
