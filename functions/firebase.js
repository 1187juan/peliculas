const admin = require('firebase-admin')
const functions = require('firebase-functions')

const serviceAccount = require('./serviceAccount.json')

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
})

module.exports = { admin, functions }
