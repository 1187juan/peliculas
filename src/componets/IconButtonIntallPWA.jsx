import {
	InstallDesktopRounded,
	InstallMobileRounded,
} from '@mui/icons-material'
import { useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'
import { IconButton } from './IconButton'

export const IconButtonIntallPWA = () => {
	const isMobile = useMediaQuery('(max-width: 599px)')
	const [isReadyForInstall, setIsReadyForInstall] = useState(false)

	const downloadApp = async (e) => {
		e.preventDefault()
		const promptEvent = window.deferredPrompt

		if (!promptEvent) {
			console.log('oops, no prompt event guardado en window')
			return
		}

		promptEvent.prompt()
		await promptEvent.userChoice
		window.deferredPrompt = null
		setIsReadyForInstall(false)
	}

	useEffect(() => {
		window.addEventListener('beforeinstallprompt', (e) => {
			e.preventDefault()
			window.deferredPrompt = e
			setIsReadyForInstall(true)
		})
	}, [])

	if (!isReadyForInstall) return null

	return (
		<IconButton
			onClick={downloadApp}
			icon={isMobile ? <InstallMobileRounded /> : <InstallDesktopRounded />}
		/>
	)
}
