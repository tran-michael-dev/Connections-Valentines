import { useState } from "react"
import WORDS from "../data/words"

function useWords() {
	const [ words, setWords ] = useState(WORDS)

	return {
		words
	};
}

export default useWords