import React, { useContext, useEffect, useState } from 'react';
import BoardContext from './BoardContext';

function TestHumanCard({ phaseIndex }) {
  const [randomIndex1, setRandomIndex1] = useState(0);

  const { humanCards, addTestHumanCard } = useContext(BoardContext);

  useEffect(() => {
    drawIndex1();
  }, [phaseIndex]);

  const drawIndex1 = () => {
    const index = Math.floor(Math.random() * humanCards.length);
    setRandomIndex1(index);

    // Record the card from deal to testHumanCards
    addTestHumanCard(index);
  };

  let cardSize = {
    width: '100px',
    height: '140px',
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
      <div className='card all-center' style={cardSize}>
        <img
          src={humanCards[randomIndex1].image}
          alt=''
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>
    </div>
  );
}

export default TestHumanCard;
