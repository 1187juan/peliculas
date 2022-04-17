import { useQuery } from 'react-query'
import { getUserData } from '../services/userData'

export const useUserData = (uid) => {
	return useQuery(['userData', uid], () => getUserData(uid), {
		staleTime: Infinity,
		retryDelay: 5000,
	})
}
