const { functions, admin } = require('./firebase')

const deleteUser = functions.auth.user().onDelete(async (user) => {
	try {
		const docRef = admin.firestore().collection('users').doc(user.uid)
		await docRef.delete()

		functions.logger.info('ok')
		return true
	} catch (e) {
		functions.logger.error(e)
		return false
	}
})

module.exports = { deleteUser }
