// CatCard.js
import React, { useState } from 'react'
import './CatCard.css'
import CatImage from '../cat-image/Cat-Image'
import CatFacts from '../cat-fact/Cat-Fact'
import ReloadButton from '../reload-button/button'
import CatFactPreview from '../cat-fact/Cat-Fact-Preview'

function CatCard () {
  const [currentFact, setCurrentFact] = useState('')

  const updateFact = (fact) => {
    setCurrentFact(fact)
  }

  return (
    <div className='cat-card'>
      <div className='cat-card-content'>
        <CatImage />
        <CatFactPreview fact={currentFact} />
        <CatFacts onUpdateFact={updateFact} />
        <ReloadButton />
      </div>
    </div>
  )
}

export default CatCard
