import Banner from "./components/Banner";
import BANNERS from "./data/banners";
import Word from "./components/Word"
import Button from "./components/Button";
import './App.css'
import useWords from "./hooks/useWords"
import Life from "./components/Life";

// App function that holds main jsx code
function App() {
  const {
    win,
    activeBanners,
    words,
    selectedWords,
    lives,
    submitting,
    submittedWords,
    shuffling,
    lostLifeIndex,
		selectWord,
    shuffleWords,
    deselectAll,
    submitWords
  } = useWords();

  return (
    <>
      <div className="header">
        <h1 className="title">Connections</h1>
        <p className="date">February 8</p>
      </div>
      <div className="body">
        <div className="banners">
          {activeBanners.map(banner => (
            <Banner 
            key={banner.id}
            color={banner.color}
            category={banner.category}
            wordList={banner.wordList}
            />
          ))}
        </div>
        <div 
        className={`words ${win ? '--win' : ''}`}
        >
          {words.map(word => (
              <Word 
              key={word.id} 
              word={word}
              selected={selectedWords.includes(word)}
              selectWord={() => selectWord(word)}
              canAnimate={!win ? selectedWords.length < 4 : true}
              submitting={submitting}
              isSubmitted={submittedWords.includes(word)}
              shuffling={shuffling}
              win={win}
              />
          ))}
        </div>
        <div className="lives">
          <p>Mistakes Remaining:</p>
          {lives.map((life, index) => (
            <Life
              key={life}
              animateLoss={index === lostLifeIndex}
            />
          ))}
        </div>
        <div className="buttons">
          <Button name={"Shuffle"} func={() => shuffleWords()}/>
          <Button name={"Deselect All"} func={() => deselectAll()}/>
          <Button name={"Submit"} func={() => submitWords()} canPress={selectedWords.length === 4 || win}/>
        </div>
      </div>
    </>
  )
}
export default App