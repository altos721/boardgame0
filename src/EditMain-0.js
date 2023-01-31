import React, { useState } from 'react';
import Card from './Card';
import uuid from 'uuid';

const EditMain = ({ cards, addCard, deleteCard }) => {
  // State
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [ranImage, setRanImage] = useState('');
  const [desc, setDesc] = useState('');
  const [key_1, setKey_1] = useState('');
  const [val_1, setVal_1] = useState('');
  const [key_2, setKey_2] = useState('');
  const [val_2, setVal_2] = useState('');
  const [key_3, setKey_3] = useState('');
  const [val_3, setVal_3] = useState('');
  const [numOfCard, setNumOfCard] = useState(1);

  // Handle functions
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleRanImage = (e) => {
    setRanImage(e.target.value);
  };

  const handleDesc = (e) => {
    setDesc(e.target.value);
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

  const handleKey_3 = (e) => {
    setKey_3(e.target.value);
  };

  const handleVal_3 = (e) => {
    setVal_3(e.target.value);
  };

  const handleNumOfCard = (e) => {
    setNumOfCard(e.target.value);
  };

  // OnSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    let newUrl = '';
    if (image === '' && ranImage !== '') {
      newUrl = `https://source.unsplash.com/800x600/?${ranImage}`;
    } else if (image !== '') {
      newUrl = image;
    }

    let newCards = [];
    for (let i = 0; i < numOfCard; i++) {
      let newCard = { image: newUrl, title, desc, id: uuid() };

      if (key_1 !== '' && val_1 !== '') {
        newCard = { ...newCard, [key_1]: val_1 };
      }
      if (key_2 !== '' && val_2 !== '') {
        newCard = { ...newCard, [key_2]: val_2 };
      }
      if (key_3 !== '' && val_3 !== '') {
        newCard = { ...newCard, [key_3]: val_3 };
      }
      newCards.push(newCard);
    }

    addCard(newCards);
    setTitle('');
    setImage('');
    setRanImage('');
    setDesc('');
    setKey_1('');
    setVal_1('');
    setKey_2('');
    setVal_2('');
    setKey_3('');
    setVal_3('');
    setNumOfCard(1);
  };

  return (
    <div className='edit-window-2'>
      <div style={userStyle}>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            card={card}
            deleteCard={deleteCard}
          />
        ))}
      </div>

      <div className='container-right'>
        <form className='form' onSubmit={onSubmit}>
          <h4>Title</h4>
          <input
            type='text'
            name='title'
            placeholder='Enter Title...'
            value={title}
            onChange={handleTitle}
          ></input>
          <h4>Image</h4>{' '}
          <input
            type='text'
            name='image'
            placeholder='Enter Image Url...'
            value={image}
            onChange={handleImage}
          ></input>
          <h4>{'Random Image (optional)'}</h4>{' '}
          <input
            type='text'
            name='ranImage'
            placeholder='Enter Keyword...'
            value={ranImage}
            onChange={handleRanImage}
          ></input>
          <h4>Description</h4>
          <input
            type='text'
            name='desc'
            placeholder='Enter Description...'
            value={desc}
            onChange={handleDesc}
          ></input>
          <h4>Params</h4>
          <div style={inputStyle}>
            <input
              type='text'
              name='key-1'
              placeholder='Enter Key...'
              value={key_1}
              onChange={handleKey_1}
            ></input>
            <input
              type='text'
              name='val-1'
              placeholder='Enter Value...'
              value={val_1}
              onChange={handleVal_1}
            ></input>
          </div>
          <div style={inputStyle}>
            <input
              type='text'
              name='key-2'
              placeholder='Enter Key...'
              value={key_2}
              onChange={handleKey_2}
            ></input>
            <input
              type='text'
              name='val-2'
              placeholder='Enter Value...'
              value={val_2}
              onChange={handleVal_2}
            ></input>
          </div>
          <div style={inputStyle}>
            <input
              type='text'
              name='key-3'
              placeholder='Enter Key...'
              value={key_3}
              onChange={handleKey_3}
            ></input>
            <input
              type='text'
              name='val-3'
              placeholder='Enter Value...'
              value={val_3}
              onChange={handleVal_3}
            ></input>
          </div>
          <h4>Number of cards</h4>
          <input
            type='text'
            name='numOfCard'
            placeholder='Enter A Number...'
            value={numOfCard}
            onChange={handleNumOfCard}
          ></input>
          <input
            type='submit'
            value='Add'
            className='btn btn-dark btn-block'
          ></input>
        </form>
      </div>
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

const inputStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '0.3rem',
};

export default EditMain;
