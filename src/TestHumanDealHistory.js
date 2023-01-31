import React, { useContext, useState } from 'react';
import BoardContext from './BoardContext';

function TestHumanDealHistory({ cardIndex }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(cardIndex);

  const { humanCards } = useContext(BoardContext);

  let cardSize = {
    width: '60px',
    height: '84px',
  };

  const currentCardImage = humanCards[cardIndex].image;

  return (
    <div
      className='text-center'
      style={{
        display: 'inline-block',
        margin: '0.3rem 0',
        position: 'relative',
      }}
    >
      <div className='card all-center' style={cardSize}>
        <img src={currentCardImage} alt='' style={{ width: '100%' }} />
      </div>
    </div>
  );
}

export default TestHumanDealHistory;
