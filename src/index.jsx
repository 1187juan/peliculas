import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { App } from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import './App.css'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
	<React.StrictMode>
		<ChakraProvider>
			<App />
		</ChakraProvider>
	</React.StrictMode>
)

serviceWorkerRegistration.register({
	onUpdate: async (registration) => {
		if (registration && registration.waiting) {
			await registration.unregister()
			registration.waiting.postMessage({ type: 'SKIP_WAITING' })
			window.location.reload()
		}
	},
})
