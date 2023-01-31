import React, { useState, useContext } from 'react';
import HumanPhase from './HumanPhase';
import uuid from 'uuid';
import BoardContext from './BoardContext';

const HumanEditPhase = () => {
  // State
  const [type, setType] = useState('deal');
  const [numberCard, setNumberCard] = useState(1);
  const [replacement, setReplacement] = useState('true');
  const [countdown, setCountdown] = useState(5);
  const [shuffle, setShuffle] = useState('deck');

  // Global state
  const { humanPhases, addHumanPhase, deleteHumanPhase } =
    useContext(BoardContext);

  // Handle functions
  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleNumberCard = (e) => {
    setNumberCard(e.target.value);
  };

  const handleReplacement = (e) => {
    setReplacement(e.target.value);
  };

  const handleCountdown = (e) => {
    setCountdown(e.target.value);
  };

  const handleShuffle = (e) => {
    setShuffle(e.target.value);
  };

  // OnSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    let newPhase = { type, id: uuid() };
    if (type === 'deal') {
      newPhase.number = parseInt(numberCard, 10);
      if (replacement === 'true') {
        newPhase.replacement = true;
      } else if (replacement === 'false') {
        newPhase.replacement = false;
      }
    } else if (type === 'countdown') {
      newPhase.countdown = countdown;
    } else if (type === 'shuffle') {
      newPhase.shuffle = shuffle;
    }

    addHumanPhase(newPhase);
    console.log(humanPhases);
  };

  // Type details
  // deal cards
  const typeDeal = (
    <div>
      <>
        <label htmlFor='numberCard'>
          <h4>{'發牌數量'}</h4>
        </label>

        <select
          name='numberCard'
          id='numberCard'
          value={numberCard}
          onChange={handleNumberCard}
        >
          <option value={1}>1</option>
          <option value={3}>3</option>
          <option value={5}>5</option>
        </select>
        <br />
        <label htmlFor='replacement'>
          <h4>{'發牌前清空手牌'}</h4>
        </label>

        <select
          name='replacement'
          id='replacement'
          value={replacement}
          onChange={handleReplacement}
        >
          <option value={false}>否</option>
          <option value={true}>是</option>
        </select>
      </>
      <br />
    </div>
  );

  // countdown
  const typeCountdown = (
    <div>
      <>
        <label htmlFor='countdown'>
          <h4>{'倒數秒數'}</h4>
        </label>

        <select
          name='countdown'
          id='countdown'
          value={countdown}
          onChange={handleCountdown}
        >
          <option value={5}>5</option>
          <option value={30}>30</option>
          <option value={60}>60</option>
        </select>
      </>
      <br />
    </div>
  );

  // shuffle
  const typeShuffle = (
    <div>
      <>
        <label htmlFor='shuffle'>
          <h4>{'洗牌'}</h4>
        </label>

        <select
          name='shuffle'
          id='shuffle'
          value={shuffle}
          onChange={handleShuffle}
        >
          <option value={'deck'}>桌面</option>
          <option value={'hand'}>手牌</option>
        </select>
      </>
      <br />
    </div>
  );

  return (
    <div className='edit-window-2'>
      <div>
        <div className='text-center' style={{ marginBottom: '1rem' }}>
          <h2>流程</h2>
          <p>{`目前遊戲流程共有 ${humanPhases.length} 個階段.`}</p>
        </div>
        <div className='text-center'>
          {humanPhases.map((phase) => (
            <HumanPhase
              key={phase.id}
              id={phase.id}
              phase={phase}
              deleteHumanPhase={deleteHumanPhase}
            />
          ))}
        </div>
      </div>

      <div className='container-right'>
        <div className='text-center'>
          <h2>新增流程</h2>
        </div>
        <form className='form' onSubmit={onSubmit}>
          <label htmlFor='phaseType'>
            <h4>選擇類型</h4>
          </label>

          <select
            name='phaseType'
            id='phaseType'
            value={type}
            onChange={handleType}
          >
            <option value='deal'>發牌</option>
            <option value='positionCards'>放置卡牌</option>
            <option value='countdown'>倒數</option>
            <option value='vote'>投票</option>
            <option value='dice'>擲骰</option>
            <option value='shuffle'>洗牌</option>
          </select>

          <br />
          {type === 'deal' && typeDeal}
          {type === 'countdown' && typeCountdown}
          {type === 'shuffle' && typeShuffle}

          <input
            type='submit'
            value='新增'
            className='btn btn-dark btn-block'
          ></input>
        </form>
      </div>
    </div>
  );
};

export default HumanEditPhase;
