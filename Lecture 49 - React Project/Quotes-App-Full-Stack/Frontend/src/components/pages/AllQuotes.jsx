import React, { Fragment, useEffect, useState } from 'react'
import Quote from '../Quote/Quote';

function AllQuotes() {
  let [quotes, setQuotes] = useState([])

  // api call -> sideeffect
  async function getQuotes() {
    let resp = await fetch('http://localhost:8080/allQuotes');
    let data = await resp.json();
    setQuotes(data);
  }
  useEffect(() => {
    getQuotes()
  }, [])


  return (
    <Fragment>
      <div>
        All Quotes
      </div>
      {
        quotes.map((quote, index) => {
          return (
            <Quote key={quote._id} author={quote.author} text={quote.text} id={quote._id} />
          )
        })
      }
    </Fragment>
  )
}

export default AllQuotes