import React, { useState, useContext, useEffect } from 'react';
import { FaArrowUp, FaArrowDown, FaAngleRight } from 'react-icons/fa';
import BoardContext from './BoardContext';

function TestHumanScoreboard() {
  // Global state
  const {
    humanScore,
    addHumanScore,
    reduceHumanScore,
    human2Score,
    addHuman2Score,
    reduceHuman2Score,
    checkGameover,
    settingPlayerNumber,
    curPlayer,
  } = useContext(BoardContext);

  useEffect(() => {
    checkGameover();
  }, [humanScore]);

  return (
    <div className='all-center' style={boardstyle2}>
      <h4>目前分數:</h4>
      {settingPlayerNumber === 1 && (
        <div>
          {'玩家 1: '}
          <FaArrowUp size={12} fill='green' onClick={addHumanScore} />
          <div
            style={{
              display: 'inline-block',
              fontSize: '40px',
              margin: '0 20px',
            }}
          >{`${humanScore}`}</div>
          <FaArrowDown size={12} fill='red' onClick={reduceHumanScore} />
        </div>
      )}
      {settingPlayerNumber === 2 && (
        <div>
          <div>
            {curPlayer === 1 && <FaAngleRight />}
            {'玩家 1: '}
            <FaArrowUp size={12} fill='green' onClick={addHumanScore} />
            <div
              style={{
                display: 'inline-block',
                fontSize: '20px',
                margin: '0 20px',
              }}
            >{`${humanScore}`}</div>
            <FaArrowDown size={12} fill='red' onClick={reduceHumanScore} />
          </div>
          <div>
            {curPlayer === 2 && <FaAngleRight />}
            {'玩家 2: '}
            <FaArrowUp size={12} fill='green' onClick={addHuman2Score} />
            <div
              style={{
                display: 'inline-block',
                fontSize: '20px',
                margin: '0 20px',
              }}
            >{`${human2Score}`}</div>
            <FaArrowDown size={12} fill='red' onClick={reduceHuman2Score} />
          </div>
        </div>
      )}
      {settingPlayerNumber === 4 && (
        <div>
          <div>
            {curPlayer === 1 && <FaAngleRight />}
            {'玩家 1: '}
            <FaArrowUp size={12} fill='green' onClick={addHumanScore} />
            <div
              style={{
                display: 'inline-block',
                fontSize: '20px',
                margin: '0 20px',
              }}
            >{`${humanScore}`}</div>
            <FaArrowDown size={12} fill='red' onClick={reduceHumanScore} />
          </div>
          <div>
            {curPlayer === 2 && <FaAngleRight />}
            {'玩家 2: '}
            <FaArrowUp size={12} fill='green' onClick={addHuman2Score} />
            <div
              style={{
                display: 'inline-block',
                fontSize: '20px',
                margin: '0 20px',
              }}
            >{`${human2Score}`}</div>
            <FaArrowDown size={12} fill='red' onClick={reduceHuman2Score} />
          </div>
          <div>
            {curPlayer === 3 && <FaAngleRight />}
            {'玩家 3: '}
            <FaArrowUp size={12} fill='green' />
            <div
              style={{
                display: 'inline-block',
                fontSize: '20px',
                margin: '0 20px',
              }}
            >
              0
            </div>
            <FaArrowDown size={12} fill='red' />
          </div>
          <div>
            {curPlayer === 4 && <FaAngleRight />}
            {'玩家 4: '}
            <FaArrowUp size={12} fill='green' />
            <div
              style={{
                display: 'inline-block',
                fontSize: '20px',
                margin: '0 20px',
              }}
            >
              0
            </div>
            <FaArrowDown size={12} fill='red' />
          </div>
        </div>
      )}
    </div>
  );
}

const boardstyle2 = {
  padding: '1rem',
  border: '#ccc 1px dotted',
  margin: '0.7rem auto',
  width: '300px',
  height: '170px',
};

export default TestHumanScoreboard;
