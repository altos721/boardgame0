import React, { useState, useContext } from 'react';
import HumanCard from './HumanCard';
import uuid from 'uuid';
import BoardContext from './BoardContext';

const HumanEditMain = () => {
  // State
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [key_1, setKey_1] = useState('');
  const [val_1, setVal_1] = useState('');
  const [key_2, setKey_2] = useState('');
  const [val_2, setVal_2] = useState('');

  // Global state
  const { humanCards, addHumanCard, deleteHumanCard, allParams, setAllParams } =
    useContext(BoardContext);

  // Handle functions
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleKey_1 = (e) => {
    setKey_1(e.target.value);
  };

  const handleVal_1 = (e) => {
    setVal_1(e.target.value);
  };

  const handleKey_2 = (e) => {
    setKey_2(e.target.value);
  };

  const handleVal_2 = (e) => {
    setVal_2(e.target.value);
  };

  // OnSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    // Add card to deck
    let newCard = {
      image,
      title,
      id: uuid(),
    };

    if (key_1 !== '' && val_1 !== '') {
      newCard = { ...newCard, [key_1]: val_1 };
      if (!allParams.includes(key_1)) {
        allParams.push(key_1);
      }
    }
    if (key_2 !== '' && val_2 !== '') {
      newCard = { ...newCard, [key_2]: parseInt(val_2, 10) };
      if (!allParams.includes(key_2)) {
        allParams.push(key_2);
      }
    }

    addHumanCard(newCard);
    setTitle('');
    setImage('');
    setVal_1('');
    setVal_2('');
  };

  return (
    <div className='edit-window-2'>
      <div>
        <div className='text-center' style={{ marginBottom: '1rem' }}>
          <h2>牌組</h2>
          <p>{`牌堆中目前有 ${humanCards.length} 張卡牌.`}</p>
        </div>
        <div className='text-center'>
          {humanCards.map((card) => (
            <HumanCard
              key={card.id}
              id={card.id}
              card={card}
              deleteHumanCard={deleteHumanCard}
              setTitle={setTitle}
              setImage={setImage}
              setKey_1={setKey_1}
              setKey_2={setKey_2}
              setVal_1={setVal_1}
              setVal_2={setVal_2}
            />
          ))}
        </div>
      </div>

      <div className='container-right'>
        <div className='text-center'>
          <h2>新增卡牌</h2>
        </div>
        <form className='form' onSubmit={onSubmit}>
          <h4>名稱</h4>
          <input
            type='text'
            name='title'
            placeholder='輸入名稱...'
            value={title}
            onChange={handleTitle}
          ></input>
          <br />
          <h4>圖片</h4>{' '}
          <input
            type='text'
            name='image'
            placeholder='輸入圖片網址...'
            value={image}
            onChange={handleImage}
          ></input>
          <br />
          <h4>{'參數 1 (字串)'}</h4>
          <div style={inputStyle}>
            <input
              type='text'
              name='key-1'
              placeholder='輸入 Key...'
              value={key_1}
              onChange={handleKey_1}
            ></input>
            <input
              type='text'
              name='val-1'
              placeholder='輸入 Value...'
              value={val_1}
              onChange={handleVal_1}
            ></input>
          </div>
          <br />
          <h4>{'參數 2 (數字)'}</h4>
          <div style={inputStyle}>
            <input
              type='text'
              name='key-2'
              placeholder='輸入 Key...'
              value={key_2}
              onChange={handleKey_2}
            ></input>
            <input
              type='text'
              name='val-2'
              placeholder='輸入 Value...'
              value={val_2}
              onChange={handleVal_2}
            ></input>
          </div>
          <br />
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

const inputStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '0.3rem',
};

export default HumanEditMain;
