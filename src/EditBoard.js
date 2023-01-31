import React, { useState, useContext } from 'react';
import Board from './Board';
import BoardContext from './BoardContext';

const EditBoard = () => {
  // State
  const [image, setImage] = useState('');

  // Global state
  const { board, addBoard } = useContext(BoardContext);

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  // onSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    // Intro image
    let newBoard = {
      image,
    };

    addBoard(newBoard);
  };

  return (
    <div className='edit-window-2'>
      <div>
        <div className='text-center' style={{ marginBottom: '1rem' }}>
          <h2>Board overview</h2>
        </div>
        <div className='text-center'>
          <Board />
        </div>
      </div>

      <div className='container-right'>
        <div className='text-center'>
          <h2>Add boardgame background</h2>
        </div>
        <form className='form' onSubmit={onSubmit}>
          <h4>Board Image</h4>{' '}
          <input
            type='text'
            name='image'
            placeholder='Enter Image Url...'
            value={image}
            onChange={handleImage}
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

export default EditBoard;
