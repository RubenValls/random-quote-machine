import { useState, useEffect } from 'react';
import { quotes } from './assets/quotes.js'
import { colors } from './assets/colors.js'
import './App.css'
import { BiSolidQuoteLeft } from 'react-icons/bi';

function App() {
  const allQuotes = quotes
  const allColors = colors
  const [selectedQuote, setSelectedQuote] = useState({});
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    setSelectedQuote(allQuotes[Math.floor(Math.random() * allQuotes.length - 1)])
    setSelectedColor(allColors[Math.floor(Math.random() * allColors.length - 1)])
  }, [allQuotes, allColors]);

  const newQuote = () => {
    setSelectedQuote(allQuotes[Math.floor(Math.random() * allQuotes.length - 1)])
    setSelectedColor(allColors[Math.floor(Math.random() * allColors.length - 1)])
  }

  return (
    <div id='container' style={{backgroundColor: selectedColor}}>
      <div id='quote-box'>
        <div id='text' style={{color: selectedColor}}>
          <h1><BiSolidQuoteLeft id='quote-icon'/>{selectedQuote?.quote}</h1>
        </div>
        <div id='author' style={{color: selectedColor}}>
          <p>- {selectedQuote?.author}</p>
        </div>
        <div id='buttons'>
          <button id='tweet-quote'>Twitter</button>
          <button id='new-quote' onClick={newQuote}>New Quote</button>
        </div>
      </div>
    </div>
  )
}

export default App
