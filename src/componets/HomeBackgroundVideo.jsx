import videos from '../data/videos.json'
import { useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'
import { Video, ContainerVideo } from './HomeBackgroundVideoCss'

export const HomeBackgroundVideo = () => {
	const isMobile = useMediaQuery(
		'(max-width: 600px) and (orientation: portrait)'
	)
	const isNotMobile = !isMobile
	const [valueY, setValueY] = useState(0)
	const top = valueY * 0.5

	useEffect(() => {
		const scroll = () => {
			const scrollY = window.scrollY
			const height = window.innerHeight * 1.5
			if (scrollY > height) return true
			if (scrollY < 0) return true

			setValueY(scrollY)
		}

		document.addEventListener('scroll', scroll)

		return () => document.removeEventListener('scroll', scroll)
	}, [])

	return (
		<ContainerVideo>
			{isMobile && (
				<Video
					top={top}
					autoPlay
					loop
					muted
					poster={videos.earthIntroPortrait.webp}
				>
					<source src={videos.earthIntroPortrait.webm} type='video/webm' />
					<source src={videos.earthIntroPortrait.mp4} type='video/mp4' />
				</Video>
			)}
			{isNotMobile && (
				<Video autoPlay loop muted poster={videos.earthIntro.webp} top={top}>
					<source src={videos.earthIntro.webm} type='video/webm' />
					<source src={videos.earthIntro.mp4} type='video/mp4' />
				</Video>
			)}
		</ContainerVideo>
	)
}
