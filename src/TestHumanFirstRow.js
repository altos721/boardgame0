import React, { useContext, useEffect } from 'react';
import TestHumanCardInHands from './TestHumanCardInHands';
import BoardContext from './BoardContext';

function TestHumanFirstRow() {
  // Global states
  const { humanCards, upperRowIndex, setUpperRowIndex } =
    useContext(BoardContext);

  return (
    <div style={boardstyle2}>
      {upperRowIndex.map((c) => (
        <TestHumanCardInHands
          cardIndex={c.index}
          key={c.id}
          id={c.id}
          chosenFrom={'upperRow'}
        />
      ))}
    </div>
  );
}

const boardstyle2 = {
  padding: '1rem',
  border: '#ccc 1px dotted',
  margin: '0.7rem auto',
  width: '680px',
  height: '180px',
};

export default TestHumanFirstRow;
