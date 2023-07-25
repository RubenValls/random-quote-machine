import { useState, useEffect } from 'react';
import { quotes } from './assets/quotes.js'
import { colors } from './assets/colors.js'
import './App.css'
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';

function App() {
  const allQuotes = quotes
  const allColors = colors
  const [selectedQuote, setSelectedQuote] = useState(allQuotes[0]);
  const [selectedColor, setSelectedColor] = useState(allColors[0]);

  useEffect(() => {
    setSelectedQuote(allQuotes[Math.floor(Math.random() * allQuotes.length)])
    setSelectedColor(allColors[Math.floor(Math.random() * allColors.length)])
  }, [allQuotes, allColors]);

  const newQuote = () => {
    setSelectedQuote(allQuotes[Math.floor(Math.random() * allQuotes.length)])
    setSelectedColor(allColors[Math.floor(Math.random() * allColors.length)])
  }

  return (
    <div id='container' style={{backgroundColor: selectedColor, transition: '2s'}}>
      <div id='quote-box'>
        <div id='text' style={{color: selectedColor, transition: '2s'}}>
          <h1><BiSolidQuoteLeft id='quote-icon'/>{selectedQuote?.quote}</h1>
        </div>
        <div id='author' style={{color: selectedColor, transition: '2s'}}>
          <p>- {selectedQuote?.author}</p>
        </div>
        <div id='buttons'>
          <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${selectedQuote?.quote}" -${selectedQuote?.author}`}>
            <button id='tweet-quote' style={{backgroundColor: selectedColor, transition: '2s'}}><BsTwitter/></button>
          </a>
          <button id='new-quote' style={{backgroundColor: selectedColor, transition: '2s'}} onClick={newQuote}>New Quote</button>
          
        </div>
      </div>
    </div>
  )
}

export default App
