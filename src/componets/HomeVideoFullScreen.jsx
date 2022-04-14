import styled from '@emotion/styled'
import videos from '../data/videos.json'
import { Box } from '@mui/system'
import { useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'

const Video = styled('video')(({ top = 0, theme }) => ({
	position: 'absolute',
	top: 0,
	zIndex: -1,

	width: '100%',
	height: '100%',
	objectFit: 'cover',
	objectPosition: 'bottom',
	transform: `translateY(${top}px)`,

	[theme.breakpoints.down('sm')]: {
		transition: 'transform 0.2s linear',
	},
}))

export const HomeVideoFullScreen = () => {
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
		<>
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

			<Box
				sx={{
					width: '100%',
					height: { xs: 'calc(75vh - 56px)', sm: 'calc(85vh - 64px)' },
				}}
			/>
		</>
	)
}
