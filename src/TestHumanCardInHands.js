import React, { useContext, useEffect, useState } from 'react';
import BoardContext from './BoardContext';
import Back from './images/back.png';

function TestHumanCardInHands({ cardIndex, id, chosenFrom }) {
  const { humanCards, setChosenCard, hideCards, hideDeckCards } =
    useContext(BoardContext);

  let cardSize = {
    width: '100px',
    height: '140px',
    margin: '0.1rem',
  };

  const handleChosenCard = () => {
    setChosenCard({ index: cardIndex, id: id, from: chosenFrom });
  };

  return (
    <div
      className='text-center'
      style={{
        display: 'inline-block',
        margin: '0.3rem 0',
        position: 'relative',
      }}
    >
      <div
        className='card all-center'
        style={cardSize}
        onClick={handleChosenCard}
      >
        {(hideCards &&
          (chosenFrom === 'myHands' || chosenFrom === 'myHands2')) ||
        (hideDeckCards &&
          (chosenFrom === 'upperRow' || chosenFrom === 'lowerRow')) ? (
          <img src={Back} alt='' style={{ width: '100%' }} />
        ) : (
          <img
            src={humanCards[cardIndex].image}
            alt=''
            style={{ width: '100%' }}
          />
        )}
      </div>
    </div>
  );
}

export default TestHumanCardInHands;
