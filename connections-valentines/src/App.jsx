import Word from "./components/Word"
import './App.css'
import useWords from "./hooks/useWords"
import { useState } from "react"

// App function that holds main jsx code
function App() {
  const {
    words
  } = useWords();

  return (
    <>
      <div className="words">
        {words.map(word => (
          <Word key={word.id} word={word}/>
        ))}
      </div>
    </>
  )
}
export default App