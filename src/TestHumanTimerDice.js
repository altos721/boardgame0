import React, { useContext } from 'react';
import BoardContext from './BoardContext';
import TestHumanDice from './TestHumanDice';
import TestHumanTimer from './TestHumanTimer';

function TestHumanTimerDice() {
  // Global state
  const { humanPhases, phaseIndex } = useContext(BoardContext);

  return (
    <div className='all-center' style={boardstyle2}>
      {humanPhases[phaseIndex].type === 'countdown' && (
        <TestHumanTimer initialSeconds={humanPhases[phaseIndex].countdown} />
      )}
      {humanPhases[phaseIndex].type === 'dice' && (
        <TestHumanDice phaseIndex={phaseIndex} />
      )}
      {humanPhases[phaseIndex].type === 'positionCards' && (
        <h2>選擇一張卡牌並移動至...</h2>
      )}
      {humanPhases[phaseIndex].type === 'deal' && (
        <h2>檢查你的手牌並點擊確認...</h2>
      )}
    </div>
  );
}

const boardstyle2 = {
  padding: '1rem',
  border: '#ccc 1px dotted',
  margin: '0.7rem auto',
  width: '300px',
  height: '200px',
};

export default TestHumanTimerDice;
