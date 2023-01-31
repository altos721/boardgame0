import React, { useContext, useState, useEffect } from 'react';
import TestCard from './TestCard';
import BoardContext from './BoardContext';

function TestSecondRow() {
  const [randomIndex1, setRandomIndex1] = useState(0);
  const [randomIndex2, setRandomIndex2] = useState(0);
  const [randomIndex3, setRandomIndex3] = useState(0);

  const { cards } = useContext(BoardContext);

  useEffect(() => {
    drawIndex1();
    drawIndex2();
    drawIndex3();
  }, []);

  const drawIndex1 = () => {
    const index = Math.floor(Math.random() * cards.length);
    setRandomIndex1(index);
  };
  const drawIndex2 = () => {
    const index = Math.floor(Math.random() * cards.length);
    setRandomIndex2(index);
  };
  const drawIndex3 = () => {
    const index = Math.floor(Math.random() * cards.length);
    setRandomIndex3(index);
  };

  return (
    <div>
      <TestCard card={cards[randomIndex1]} />
      <TestCard card={cards[randomIndex2]} />
      <TestCard card={cards[randomIndex3]} />
    </div>
  );
}

export default TestSecondRow;
