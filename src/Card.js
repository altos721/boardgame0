import React, { useState } from 'react';

const Card = ({ card, id, deleteCard }) => {
  const [isFront, setIsFront] = useState(true);

  const toggleFrontPrev = () => {
    setIsFront(!isFront);
  };

  // Card size
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
      <button className='btn btn-primary' onClick={() => deleteCard(id)}>
        Delete
      </button>
      {isFront ? (
        <div
          className='card all-center'
          onClick={toggleFrontPrev}
          style={cardSize}
        >
          {card.image ? (
            <img src={card.image} alt='' style={{ width: '100%' }} />
          ) : null}
          {card.desc && <h2>{card.desc}</h2>}
        </div>
      ) : (
        <div
          className='card all-center'
          onClick={toggleFrontPrev}
          style={cardSize}
        >
          {card.backImage ? (
            <img src={card.backImage} alt='' style={{ width: '100%' }} />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Card;
