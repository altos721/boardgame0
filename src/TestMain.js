import React, { useContext } from 'react';
import TestFirstRow from './TestFirstRow';
import TestSecondRow from './TestSecondRow';
import BoardContext from './BoardContext';

function TestMain() {
  const { cards, intro, board } = useContext(BoardContext);

  const boardstyle = {
    padding: '1rem',
    border: '#ccc 1px dotted',
    margin: '0.7rem',
    width: '1200px',
    height: '1000px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: `url(${board.image})`,
  };

  return (
    <div className='text-center' style={boardstyle}>
      <TestFirstRow />
      <TestSecondRow />
      <TestSecondRow />
    </div>
  );
}

export default TestMain;
