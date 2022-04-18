import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
	createUserWithEmailAndPassword,
	deleteUser,
	FacebookAuthProvider,
	GoogleAuthProvider,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth'
import { auth } from '../firebase'
import { LinearProgress } from '@mui/material'

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null)

	const [loading, setLoading] = useState(true)
	const isLogin = !!currentUser
	const uid = currentUser?.uid ?? null

	const google = new GoogleAuthProvider()
	const accessWithGoogle = () => signInWithPopup(auth, google)

	const facebook = new FacebookAuthProvider()
	const accessWithFacebook = () => signInWithPopup(auth, facebook)

	const signup = (email, password) =>
		createUserWithEmailAndPassword(auth, email, password)

	const login = (email, password) =>
		signInWithEmailAndPassword(auth, email, password)

	const logout = () => signOut(auth)

	const deleteAccount = () => deleteUser(currentUser)

	const resetPassword = (email) => sendPasswordResetEmail(auth, email)

	const value = {
		currentUser,
		isLogin,
		accessWithGoogle,
		accessWithFacebook,
		signup,
		login,
		logout,
		deleteAccount,
		resetPassword,
		uid,
	}

	useEffect(() => {
		const unsuscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user)
			setLoading(false)
		})
		return unsuscribe
	}, [])

	return (
		<AuthContext.Provider value={value}>
			{loading ? <LinearProgress /> : children}
		</AuthContext.Provider>
	)
}

AuthProvider.propTypes = {
	children: PropTypes.element.isRequired,
}
