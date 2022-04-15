import styled from '@emotion/styled'

export const Container = styled('div')({
	position: 'relative',
	display: 'inline-flex',
	zIndex: 0,
})

export const BoxProgress = styled('div')({
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
	position: 'absolute',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	'&::before': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,

		zIndex: -1,
		border: '5px solid',
		borderColor: 'text.disabled',
		borderRadius: '50%',
	},
})
