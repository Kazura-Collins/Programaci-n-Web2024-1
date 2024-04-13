import React, { useState, useEffect } from 'react'

function CatFacts () {
  const [fact, setFact] = useState('')

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => setFact(data.fact))
      .catch(error => console.log('Error fetching cat fact:', error))
  }, [])

  return (
    <div>
      <p>{fact}</p>
    </div>
  )
}

export default CatFacts
