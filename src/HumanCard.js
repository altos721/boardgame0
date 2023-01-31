// import { FaTimes } from 'react-icons/fa';
import React, { useState, useContext } from 'react';
import BoardContext from './BoardContext';
import { FaTrash } from 'react-icons/fa';

const HumanCard = ({
  card,
  id,
  deleteHumanCard,
  setTitle,
  setImage,
  setKey_1,
  setKey_2,
  setVal_1,
  setVal_2,
}) => {
  // Global states
  const { allParams } = useContext(BoardContext);

  // Card size
  let cardSize = {
    width: '200px',
    height: '280px',
  };

  const handleClick = () => {
    if (allParams.length === 2) {
      setKey_1(allParams[1]);
      setKey_2(allParams[0]);
      setVal_1(card[allParams[1]]);
      setVal_2(card[allParams[0]]);
    } else if (allParams.length === 1) {
      setKey_1(allParams[0]);
      setVal_1(card[allParams[0]]);
    }

    setTitle(card.title);
    setImage(card.image);
  };

  return (
    <div
      className='text-center'
      style={{
        display: 'inline-block',
        margin: '0.3rem',
        position: 'relative',
      }}
    >
      <button className='btn btn-danger' onClick={() => deleteHumanCard(id)}>
        <FaTrash size={14} />
        {/* <FaTimes color='purple' /> */}
      </button>

      <div className='card all-center' style={cardSize} onClick={handleClick}>
        <img
          src={card.image}
          alt=''
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>
    </div>
  );
};

export default HumanCard;
