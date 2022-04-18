import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getUserData, updateUserData } from '../services/userData'

export const useUserData = (uid) => {
	return useQuery(['userData', uid], () => getUserData(uid), {
		staleTime: Infinity,
		retryDelay: 5000,
	})
}

export const useUpdateUserData = (uid) => {
	const queryClient = useQueryClient()

	return useMutation(updateUserData, {
		onSuccess: (userData) => {
			queryClient.setQueryData(['userData', uid], (userDataBefore) => ({
				...userDataBefore,
				...userData,
			}))
		},
	})
}
