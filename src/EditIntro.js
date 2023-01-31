import React, { useState, useContext } from 'react';
import Intro from './Intro';
import BoardContext from './BoardContext';

const EditIntro = () => {
  // State
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [desc, setDesc] = useState('');

  // Global state
  const { intro, addIntro } = useContext(BoardContext);

  // HandleFunctions
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  // onSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    // Intro image
    let newIntro = {
      title,
      image,
      desc,
    };

    addIntro(newIntro);
  };

  return (
    <div className='edit-window-2'>
      <div>
        <div className='text-center' style={{ marginBottom: '1rem' }}>
          <h2>Intro overview</h2>
        </div>
        <div className='text-center'>
          <Intro intro={intro} />
        </div>
      </div>

      <div className='container-right'>
        <div className='text-center'>
          <h2>Add boardgame introduction</h2>
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
          <h4>Intro Image</h4>{' '}
          <input
            type='text'
            name='image'
            placeholder='Enter Image Url...'
            value={image}
            onChange={handleImage}
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

export default EditIntro;
