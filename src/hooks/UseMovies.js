import { useInfiniteQuery } from 'react-query'
import { getMovies } from '../services/getMovies'
import { getSearchMovies } from '../services/getSearchMovies'

export const useMovies = (search) => {
	return useInfiniteQuery(
		['movies', search],
		({ pageParam }) =>
			search ? getSearchMovies(search, pageParam) : getMovies(pageParam),
		{
			getNextPageParam: (lastPage) => {
				if (lastPage.page === lastPage.totalPages) return false
				return lastPage.page + 1
			},
			staleTime: Infinity,
		}
	)
}
