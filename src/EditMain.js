import React, { useState, useContext } from 'react';
import Card from './Card';
import uuid from 'uuid';
import BoardContext from './BoardContext';

const EditMain = () => {
  // State
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [ranImage, setRanImage] = useState('');
  const [backImage, setBackImage] = useState('');
  const [backRanImage, setBackRanImage] = useState('');
  const [desc, setDesc] = useState('');
  const [key_1, setKey_1] = useState('');
  const [val_1, setVal_1] = useState('');
  const [key_2, setKey_2] = useState('');
  const [val_2, setVal_2] = useState('');
  const [key_3, setKey_3] = useState('');
  const [val_3, setVal_3] = useState('');
  const [cardWidth, setCardWidth] = useState('');
  const [cardHeight, setCardHeight] = useState('');
  const [numOfCard, setNumOfCard] = useState(1);

  // Global state
  const { cards, addCard, deleteCard } = useContext(BoardContext);

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

  const handleBackImage = (e) => {
    setBackImage(e.target.value);
  };

  const handleBackRanImage = (e) => {
    setBackRanImage(e.target.value);
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

  const handleCardWidth = (e) => {
    setCardWidth(e.target.value);
  };

  const handleCardHeight = (e) => {
    setCardHeight(e.target.value);
  };

  const handleNumOfCard = (e) => {
    setNumOfCard(e.target.value);
  };

  // OnSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    // Front image
    let newUrl = '';
    if (image === '' && ranImage !== '') {
      newUrl = `https://source.unsplash.com/800x600/?${ranImage}`;
    } else if (image !== '') {
      newUrl = image;
    }

    // Back image
    let newBackUrl = '';
    if (backImage === '' && backRanImage !== '') {
      newBackUrl = `https://source.unsplash.com/800x600/?${backRanImage}`;
    } else if (backImage !== '') {
      newBackUrl = backImage;
    }

    // Add card to deck
    let newCards = [];
    for (let i = 0; i < numOfCard; i++) {
      let newCard = {
        image: newUrl,
        backImage: newBackUrl,
        title,
        desc,
        cardWidth,
        cardHeight,
        id: uuid(),
      };

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
      <div>
        <div className='text-center' style={{ marginBottom: '1rem' }}>
          <h2>Deck overview</h2>
          <p>{`There are ${cards.length} card(s) in the deck.`}</p>
        </div>
        <div className='text-center'>
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              card={card}
              deleteCard={deleteCard}
            />
          ))}
        </div>
      </div>

      <div className='container-right'>
        <div className='text-center'>
          <h2>Add a card</h2>
        </div>
        <form className='form' onSubmit={onSubmit}>
          <h4>Title</h4>
          <input
            type='text'
            name='title'
            placeholder='Enter Title...'
            value={title}
            onChange={handleTitle}
          ></input>
          <br />
          <h4>Front: Image</h4>{' '}
          <input
            type='text'
            name='image'
            placeholder='Enter Image Url...'
            value={image}
            onChange={handleImage}
          ></input>
          <h4>{'Front: Random Image (optional)'}</h4>{' '}
          <input
            type='text'
            name='RanImage'
            placeholder='Enter Keyword...'
            value={ranImage}
            onChange={handleRanImage}
          ></input>
          <br />
          <h4>Back: Image</h4>{' '}
          <input
            type='text'
            name='backImage'
            placeholder='Enter Image Url...'
            value={backImage}
            onChange={handleBackImage}
          ></input>
          <h4>{'Back: Random Image (optional)'}</h4>{' '}
          <input
            type='text'
            name='backRanImage'
            placeholder='Enter Keyword...'
            value={backRanImage}
            onChange={handleBackRanImage}
          ></input>
          <br />
          <h4>Description</h4>
          <input
            type='text'
            name='desc'
            placeholder='Enter Description...'
            value={desc}
            onChange={handleDesc}
          ></input>
          <br />
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
          <br />
          <h4>Size</h4>
          <div style={inputStyle}>
            <input
              type='text'
              name='cardWidth'
              placeholder='Enter Width...'
              value={cardWidth}
              onChange={handleCardWidth}
            ></input>
            <input
              type='text'
              name='cardHeight'
              placeholder='Enter Height...'
              value={cardHeight}
              onChange={handleCardHeight}
            ></input>
          </div>
          <br />
          <h4>Number of cards</h4>
          <input
            type='text'
            name='numOfCard'
            placeholder='Enter A Number...'
            value={numOfCard}
            onChange={handleNumOfCard}
          ></input>
          <br />
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

// const userStyle = {
//   display: 'inline-block',
//   gridTemplateColumns: 'repeat(3, 1fr)',
//   gridGap: '1rem',
// };

const inputStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '0.3rem',
};

export default EditMain;
