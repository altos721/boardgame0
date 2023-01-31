import React, { useContext, useState, useEffect } from 'react';
import TestCardBack from './TestCardBack';
import BoardContext from './BoardContext';

function TestFirstRow() {
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
      <TestCardBack card={cards[randomIndex1]} />
      <TestCardBack card={cards[randomIndex2]} />
      <TestCardBack card={cards[randomIndex3]} />
    </div>
  );
}

export default TestFirstRow;
