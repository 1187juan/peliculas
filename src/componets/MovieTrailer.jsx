import { PlayArrowRounded } from '@mui/icons-material'
import { Backdrop, Button } from '@mui/material'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Content, YouTubeCustom } from './MovieTrailerCss'

export const MovieTrailer = ({ videoId }) => {
	const [open, setOpen] = useState(false)
	const handleClose = () => setOpen(false)
	const handleOpen = () => setOpen(true)
	return (
		<>
			<Button
				startIcon={<PlayArrowRounded />}
				variant='contained'
				onClick={handleOpen}
			>
				Ver Trailer
			</Button>
			<Backdrop
				open={open}
				onClick={handleClose}
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Content>
					{open && (
						<YouTubeCustom
							videoId={videoId}
							opts={{
								playerVars: { autoplay: 1 },
							}}
						/>
					)}
				</Content>
			</Backdrop>
		</>
	)
}

MovieTrailer.propTypes = {
	videoId: PropTypes.string,
}
