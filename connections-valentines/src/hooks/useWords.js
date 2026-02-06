import { use, useState } from "react"
import WORDS from "../data/words"
import shuffle from "../functions/shuffle"
import useBanners from "./useBanners";

function useWords() {
	const [
		activeBanners,
		addBanner
	] = useBanners();

	const [ words, setWords ] = useState(WORDS);
	const [ selectedWords, setSelectedWords ] = useState([]);
	const [ lives, setLives ] = useState(4);
	const [submitting, setSubmitting] = useState(false);
	const [submittedWords, setSubmittedWords] = useState([]);
	const [ shuffling, setShuffling ] = useState(false)

	// Select a word, only up to four words can be selected
	const selectWord = (word) => {
		setSelectedWords(prev => {
			if (prev.includes(word)) {
				return prev.filter(w => w !== word)
			}
			if (prev.length >= 4) {
				return prev;
			}

			return [...prev, word]
		})
	}

	// Shuffle the array of words. Must copy array for shuffle or it won't reload state
	const shuffleWords = () => {
		if (shuffling || submitting) return;
		setShuffling(true);
		setWords(prev => shuffle([...prev]));

		setTimeout(() => {
			setShuffling(false);
		}, 600);
	}

	// Deselect all selected words
	const deselectAll = () => {
		setSelectedWords(prev => []);
	}

	// If selected 4 words, submit and check if they belong in they same category. If so delete them
	// If not, take off a life.
	const submitWords = () => {
		if (selectedWords.length < 4 || submitting) return;

		setSubmitting(true);

		const correct =
			selectedWords.every(w => w.difficulty === selectedWords[0].difficulty);

		// Freeze the 4 words that should animate
		setSubmittedWords(selectedWords);

		setTimeout(() => {
			if (correct) {
				deleteWords(selectedWords);
				addBanner(selectedWords[0].difficulty);
			} else {
				removeLife();
			}

			setSelectedWords([]);
			setSubmittedWords([]);
			setSubmitting(false);
		}, 600);
	};

	// Deletes all words selected from words array
	const deleteWords = (toDelete) => {
  setWords(prev =>
    prev.filter(w => !toDelete.includes(w)));
	};

	const removeLife = () => {
  setLives(prev => Math.max(prev - 1, 0));
};

	return {
		activeBanners,
		words,
		selectedWords,
		lives,
		submitting,
		submittedWords,
		shuffling,
		selectWord,
		shuffleWords,
		deselectAll,
		submitWords,
	};
}

export default useWords