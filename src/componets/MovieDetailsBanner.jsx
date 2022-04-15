import { Box } from '@mui/system'
import { Button, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import {
	BoxButtons,
	ContainerImg,
	Container,
	Punctuation,
	SubTitle,
	Poster,
	PosterImg,
	PosterStream,
	PosterStreamImg,
	PosterPlaceholder,
} from './MovieDetailsBannerCss'
import { Title } from './Title'
import { CircularProgressWithLabel } from './CircularProgressWithLabel'
import { FavoriteRounded, MovieRounded } from '@mui/icons-material'
import { MovieTrailer } from './MovieTrailer'

export const MovieDetailsBanner = ({ movie }) => {
	const releaseYear = movie.releaseDate.slice(0, 4)
	const genres = new Intl.ListFormat('es').format(movie.genres)
	const durationTime =
		Math.trunc(movie.runtime / 60) + 'h ' + (movie.runtime % 60) + 'm'
	const punctuation = movie.voteAverage * 10
	const isPoster = !!movie.posterUrl300
	const isNotPoster = !movie.posterUrl300
	const isVideos = !!movie.videos.length

	return (
		<ContainerImg imgUrl={movie.backdropUrl500}>
			<Container>
				{isPoster && (
					<Poster>
						<PosterImg
							src={movie.posterUrl300}
							alt={movie.title}
							borderMedium={!!movie.streamUrl200}
						/>
						{movie.streamUrl200 && (
							<PosterStream>
								<PosterStreamImg src={movie.streamUrl200} alt='stream' />

								<Typography variant='subtitle2'>Ahora en Stream</Typography>
							</PosterStream>
						)}
					</Poster>
				)}
				{isNotPoster && (
					<PosterPlaceholder>
						<MovieRounded sx={{ fontSize: 64 }} />
						<Title variant='h4' component='h1'>
							{movie.title}
						</Title>
					</PosterPlaceholder>
				)}
				<section>
					<Title>
						{movie.title}
						<Box component='span' sx={{ color: 'text.secondary' }}>
							{' ' + releaseYear}
						</Box>
					</Title>
					<SubTitle variant='subtitle1' paragraph>
						<span>📅 {movie.releaseDate} </span>
						<span>📝 {genres} </span>
						<span>⌚ {durationTime} </span>
					</SubTitle>
					<Punctuation>
						<CircularProgressWithLabel value={punctuation} size='64px' />
						<Title component='h2' variant='h4'>
							Puntuación de {movie.voteCount} usuarios
						</Title>
					</Punctuation>
					<BoxButtons>
						<Button variant='contained' startIcon={<FavoriteRounded />}>
							Guardar
						</Button>
						{isVideos && <MovieTrailer videoId={movie.videos[0]} />}
					</BoxButtons>
					<Title component='h2' variant='h4'>
						Vista general
					</Title>
					<Typography color='text.secondary'>
						{movie.overview || 'Aun no tiene vista general.'}
					</Typography>
				</section>
			</Container>
		</ContainerImg>
	)
}

MovieDetailsBanner.propTypes = {
	movie: PropTypes.object.isRequired,
}
