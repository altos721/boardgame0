import React, { useState, useEffect } from 'react';
import {
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaDiceFive,
  FaDiceSix,
} from 'react-icons/fa';

function TestHumanDice({ phaseIndex }) {
  const [randomIndex, setRandomIndex] = useState(6);
  const [hasRolled, setHasRolled] = useState(false);

  useEffect(() => {
    setHasRolled(false);
  }, [phaseIndex]);

  const drawIndex = () => {
    const index = Math.floor(Math.random() * 6) + 1;
    setRandomIndex(index);
    setHasRolled(true);
  };

  const dieDetail = (
    <div>
      {randomIndex === 1 && <FaDiceOne size={70} />}
      {randomIndex === 2 && <FaDiceTwo size={70} />}
      {randomIndex === 3 && <FaDiceThree size={70} />}
      {randomIndex === 4 && <FaDiceFour size={70} />}
      {randomIndex === 5 && <FaDiceFive size={70} />}
      {randomIndex === 6 && <FaDiceSix size={70} />}
    </div>
  );

  return (
    <div className='all-center'>
      {hasRolled ? (
        dieDetail
      ) : (
        <button onClick={drawIndex} className='btn btn-success'>
          擲骰!
        </button>
      )}
    </div>
  );
}

export default TestHumanDice;
