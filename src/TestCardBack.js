import React from 'react';

function TestCardBack({ card }) {
  let cardSize = {};
  if (card.cardWidth !== '' && card.cardHeight !== '') {
    cardSize = {
      width: `${card.cardWidth}px`,
      height: `${card.cardHeight}px`,
    };
  } else {
    cardSize = {
      width: '200px',
      height: '280px',
    };
  }

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
        <img src={card.backImage} alt='' style={{ width: '100%' }} />
        {card.desc && <h2>{card.desc}</h2>}
      </div>
    </div>
  );
}

export default TestCardBack;
