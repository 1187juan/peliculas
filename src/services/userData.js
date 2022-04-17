import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'

export const getUserData = async (uid) => {
	if (!uid) return null

	const userRef = doc(db, 'users', uid)
	const getUser = await getDoc(userRef)

	if (!getUser.exists())
		throw new Error(
			'No fue posible obtener tus datos de usuario, intentalo más tarde.'
		)

	const userData = getUser.data()

	return userData
}

export const updateUserData = async ({ uid, data }) => {
	const userRef = doc(db, 'users', uid)
	await updateDoc(userRef, data)
	return data
}
