import { useEffect, useState } from 'react'

export const UseDebounced = (initialValue, delay = 300) => {
	const [value, setValue] = useState(initialValue)

	useEffect(() => {
		const handler = setTimeout(() => setValue(initialValue), delay)

		return () => clearTimeout(handler)
	}, [initialValue, delay])

	return value
}
