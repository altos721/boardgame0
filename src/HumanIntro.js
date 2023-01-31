import React, { useContext } from 'react';
import BoardContext from './BoardContext';

function HumanIntro({ setImage, image }) {
  // Global states
  const { info } = useContext(BoardContext);

  // Card size
  let cardSize = {
    padding: '3rem',
    border: '#ccc 1px dotted',
    margin: '0.7rem auto',
    width: '800px',
  };

  const handleClick = () => {
    setImage(image);
  };

  return (
    <div
      className='text-center'
      style={{
        display: 'inline-block',
        margin: '1rem 0',
        position: 'relative',
      }}
    >
      <div className='all-center' style={cardSize} onClick={handleClick}>
        <img src={info} alt='' style={{ width: '100%' }} />
        <button style={{ marginTop: '30px' }} className='btn btn-danger'>
          確認
        </button>
      </div>
    </div>
  );
}

export default HumanIntro;
