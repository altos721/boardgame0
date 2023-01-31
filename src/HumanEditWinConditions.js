import React, { useState, useContext } from 'react';
import BoardContext from './BoardContext';

function HumanEditWinConditions() {
  // State
  const [score, setScore] = useState(0);
  const [greaterScore, setGreaterScore] = useState(10);
  const [lessScore, setLessScore] = useState(-10);
  const [winType, setWinType] = useState('greater');
  const [message, setMessage] = useState('');

  // Global state
  const {
    humanScore,
    humanWinConditions,
    setHumanScore,
    setHumanWinConditions,
  } = useContext(BoardContext);

  // Handle functions
  const handleScore = (e) => {
    setScore(e.target.value);
  };

  const handleGreaterScore = (e) => {
    setGreaterScore(e.target.value);
  };

  const handleLessScore = (e) => {
    setLessScore(e.target.value);
  };

  const handleWinType = (e) => {
    setWinType(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  // OnSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    let newMessage = '';
    if (message === '' && winType === 'greater') {
      newMessage = `You win! Your score is greater than ${greaterScore}`;
    } else if (message === '' && winType === 'less') {
      newMessage = `You win! Your score is less than ${lessScore}`;
    } else {
      newMessage = message;
    }

    setHumanScore(parseInt(score, 10));
    if (winType === 'greater') {
      setHumanWinConditions({
        defaultScore: score,
        winType: winType,
        winScore: parseInt(greaterScore, 10),
        winMessage: newMessage,
      });
    } else if (winType === 'less') {
      setHumanWinConditions({
        defaultScore: score,
        winType: winType,
        winScore: parseInt(lessScore, 10),
        winMessage: newMessage,
      });
    }
  };

  // Win type details
  // win if score is greater than...
  const typeGreater = (
    <div>
      <>
        <label htmlFor='greater'>
          <h4>{'當分數高於...時勝利'}</h4>
        </label>

        <input
          type='text'
          name='greaterScore'
          placeholder='輸入數字...'
          value={greaterScore}
          onChange={handleGreaterScore}
        ></input>
      </>
      <br />
    </div>
  );

  // win if score is less than...
  const typeLess = (
    <div>
      <>
        <label htmlFor='less'>
          <h4>{'當分數低於...時獲勝'}</h4>
        </label>

        <input
          type='text'
          name='lessScore'
          placeholder='輸入數字...'
          value={lessScore}
          onChange={handleLessScore}
        ></input>
      </>
      <br />
    </div>
  );

  return (
    <div className='edit-window-2'>
      <div>
        <div className='text-center' style={{ marginBottom: '1rem' }}>
          <h2>勝利條件</h2>
          <br />
          <h3>{`起始分數: ${humanWinConditions.defaultScore}`}</h3>
          <br />
          {humanWinConditions.winType === 'none' && <h3>目前沒有勝利條件</h3>}
          {humanWinConditions.winType === 'greater' && (
            <h3>{`當分數高於 ${humanWinConditions.winScore}時獲勝`}</h3>
          )}
          {humanWinConditions.winType === 'less' && (
            <h3>{`當分數低於 ${humanWinConditions.winScore}時獲勝`}</h3>
          )}

          <br />
          <h3>
            {humanWinConditions.winMessage !== '' &&
              `勝利訊息: ${humanWinConditions.winMessage}`}
          </h3>
        </div>
      </div>

      <div className='container-right'>
        <div className='text-center'>
          <h2>設定勝利條件</h2>
        </div>
        <form className='form' onSubmit={onSubmit}>
          <h4>起始分數</h4>
          <input
            type='text'
            name='Score'
            placeholder='輸入起始分數...'
            value={score}
            onChange={handleScore}
          ></input>
          <br />
          <h4>勝利條件</h4>{' '}
          <select
            name='winType'
            id='winType'
            value={winType}
            onChange={handleWinType}
          >
            <option value='greater'>高於...</option>
            <option value='less'>低於...</option>
          </select>
          <br />
          {winType === 'greater' && typeGreater}
          {winType === 'less' && typeLess}
          <h4>勝利訊息</h4>
          <input
            type='text'
            name='message'
            placeholder='輸入訊息...'
            value={message}
            onChange={handleMessage}
          ></input>
          <br />
          <input
            type='submit'
            value='確認'
            className='btn btn-dark btn-block'
          ></input>
        </form>
      </div>
    </div>
  );
}

export default HumanEditWinConditions;
