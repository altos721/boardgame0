import React, { useContext } from 'react';
import BoardContext from './BoardContext';
import TestHumanphases from './TestHumanphases';
import TestHumanScoreboard from './TestHumanScoreboard';
import TestHumanTimerDice from './TestHumanTimerDice';
import TestHumanPosition from './TestHumanPosition';
import TestInfo from './TestInfo';

function TestHumanMain() {
  const { humanPhases, showInfo, info } = useContext(BoardContext);

  const boardstyle = {
    padding: '1rem',
    border: '#ccc 1px dotted',
    margin: '0.7rem auto',
    width: '900px',
    height: '700px',
  };
  const boardstyle2 = {
    padding: '1rem',
    border: '#ccc 1px dotted',
    margin: '0.7rem auto',
    width: '350px',
    height: '700px',
  };

  const boardstyleOuter = {
    padding: '1rem',
    border: '#ccc 1px dotted',
    margin: '0.7rem auto',
    width: '1300px',
  };

  return (
    <div className='text-center' style={boardstyleOuter}>
      {info !== '' && showInfo === true && <TestInfo />}
      <div style={inputStyle}>
        <div className='text-center' style={boardstyle}>
          <TestHumanphases />
        </div>
        <div className='text-center' style={boardstyle2}>
          <TestHumanScoreboard />
          <TestHumanTimerDice />
          <TestHumanPosition />
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '0.3rem',
};

export default TestHumanMain;
