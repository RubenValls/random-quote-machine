import { useState, useEffect } from 'react';
import { quotes } from './assets/quotes.js'
import './App.css'
import { BiSolidQuoteLeft } from 'react-icons/bi';

function App() {
  const allQuotes = quotes
  const [selectedQuote, setSelectedQuote] = useState({});

  useEffect(() => {
    setSelectedQuote(allQuotes[Math.floor(Math.random() * allQuotes.length - 1)])
  }, [allQuotes]);

  const newQuote = () => {
    setSelectedQuote(allQuotes[Math.floor(Math.random() * allQuotes.length - 1)])
  }

  return (
    <div id='container'>
      <div id='quote-box'>
        <div id='text'>
          <h1><BiSolidQuoteLeft id='quote-icon'/>{selectedQuote?.quote}</h1>
        </div>
        <div id='author'>
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
