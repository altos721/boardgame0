import React, { useContext } from 'react';
import BoardContext from './BoardContext';
import TestHumanCard from './TestHumanCard';
import TestHumanMyHands from './TestHumanMyHands';
import TestHumanMyHands2 from './TestHumanMyHands2';
import TestHumanFirstRow from './TestHumanFirstRow';
import TestHumanSecondRow from './TestHumanSecondRow';
import TestHumanQuestion from './TestHumanQuestion';
import {
  FaArrowRight,
  FaEye,
  FaEyeSlash,
  FaQuestionCircle,
} from 'react-icons/fa';

function TestHumanphases() {
  const {
    humanPhases,
    phaseIndex,
    setPhaseIndex,
    gameover,
    humanWinConditions,
    handleRestart,
    curPlayer,
    setCurPlayer,
    settingPlayerNumber,
    toggleHide,
    toggleDeckHide,
    hideCards,
    hideDeckCards,
    drawnCardsIndex,
    humanCards,
    setShowInfo,
    showInfo,
    showTestQuestion,
    questions,
    testQuestionIndex,
  } = useContext(BoardContext);

  let phaseSize = {
    width: '700px',
    height: '420px',
    padding: '1rem',
    border: '#ccc 1px dotted',
    margin: '0.7rem auto',
  };

  const upperPhase = (
    <div>
      {gameover === false && (
        <div style={{ paddingTop: '30px' }}>
          {hideDeckCards ? (
            <FaEye size={'24px'} color={'grey'} onClick={toggleDeckHide} />
          ) : (
            <FaEyeSlash size={'24px'} color={'grey'} onClick={toggleDeckHide} />
          )}
          <TestHumanFirstRow />
          <TestHumanSecondRow />
          {humanPhases[phaseIndex].type === 'vote' && <p>vote</p>}
        </div>
      )}
      {gameover === true && (
        <div>
          <h1>{humanWinConditions.winMessage}</h1>
          <button
            style={{ marginTop: '30px' }}
            className='btn btn-success'
            onClick={handleRestart}
          >
            重新開始
          </button>
        </div>
      )}
    </div>
  );

  const handleClick = () => {
    if (phaseIndex < humanPhases.length - 1) {
      setPhaseIndex(phaseIndex + 1);
      setCurPlayer(1);
    }
  };

  const handleCurPlayerRight = () => {
    if (curPlayer < settingPlayerNumber) {
      setCurPlayer(curPlayer + 1);
    }
  };

  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div>
      <div>
        {showTestQuestion && questions.length > 0 ? (
          <TestHumanQuestion question={questions[testQuestionIndex]} />
        ) : (
          <div className='all-center' style={phaseSize}>
            {upperPhase}
          </div>
        )}

        {curPlayer === 1 && <TestHumanMyHands />}
        {curPlayer === 2 && <TestHumanMyHands2 />}

        <FaQuestionCircle
          size={24}
          style={{ marginRight: '20px' }}
          onClick={handleShowInfo}
        />
        {hideCards ? (
          <FaEye size={'24px'} onClick={toggleHide} />
        ) : (
          <FaEyeSlash size={'24px'} onClick={toggleHide} />
        )}
        <button
          style={{ marginTop: '30px', marginLeft: '20px', marginRight: '20px' }}
          onClick={handleClick}
          className='btn btn-primary'
        >
          確認
        </button>
        {curPlayer !== settingPlayerNumber && (
          <FaArrowRight size={16} fill='red' onClick={handleCurPlayerRight} />
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '0.3rem',
};

export default TestHumanphases;
