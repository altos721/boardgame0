import React, { useState, useContext } from 'react';
import BoardContext from './BoardContext';
import HumanIntro from './HumanIntro';

function HumanEditIntro() {
  // Local state
  const [image, setImage] = useState('');

  // Global state
  const { info, setInfo } = useContext(BoardContext);

  const handleImage = (e) => {
    setImage(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    setInfo(image);
  };

  return (
    <div className='edit-window-2'>
      <div>
        <div className='text-center' style={{ marginBottom: '1rem' }}>
          <h2>遊戲說明</h2>
          {info === '' && <p>{`目前遊戲還未設置遊戲說明`}</p>}
        </div>
        <div className='text-center'>
          {info !== '' && <HumanIntro setImage={setImage} image={info} />}
        </div>
      </div>

      <div className='container-right'>
        <div className='text-center'>
          <h2>新增遊戲說明</h2>
        </div>
        <form className='form' onSubmit={onSubmit}>
          <h4>圖片</h4>{' '}
          <input
            type='text'
            name='image'
            placeholder='輸入圖片網址...'
            value={image}
            onChange={handleImage}
          ></input>
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
}

export default HumanEditIntro;
