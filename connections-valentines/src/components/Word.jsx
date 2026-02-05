import './Word.css'
import { useState } from 'react'

function Word({ word }) {
	const [ selected, setSelected ] = useState(false);
	const handleClick = () => {
		setSelected(prev => !prev);
	}

	return (
		<>
			<button 
			className={`word-btn ${selected ? '--active' : ''}`}
			onClick={handleClick}
			>
				{word.name}
			</button>
		</>
	)
}

export default Word