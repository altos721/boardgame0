import React, { useContext, useEffect } from 'react';
import TestHumanCardInHands from './TestHumanCardInHands';
import BoardContext from './BoardContext';

function TestHumanSecondRow() {
  // Global states
  const { humanCards, lowerRowIndex, setUpperRowIndex } =
    useContext(BoardContext);

  return (
    <div style={boardstyle2}>
      {lowerRowIndex.map((c) => (
        <TestHumanCardInHands
          cardIndex={c.index}
          key={c.id}
          id={c.id}
          chosenFrom={'lowerRow'}
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

export default TestHumanSecondRow;
