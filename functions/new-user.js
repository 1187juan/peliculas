const { functions, admin } = require('./firebase')

const newUser = functions.auth.user().onCreate(async (user) => {
	try {
		const docRef = admin.firestore().collection('users').doc(user.uid)
		await docRef.create({
			savedMovies: [],
			uid: user.uid,
			created: admin.firestore.Timestamp.fromDate(new Date()),
		})

		functions.logger.info('ok')
		return true
	} catch (e) {
		functions.logger.error(e)
		return false
	}
})

module.exports = { newUser }
