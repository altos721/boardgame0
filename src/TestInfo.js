import React, { useContext } from 'react';
import BoardContext from './BoardContext';

function TestInfo() {
  // Global states
  const { info, showInfo, setShowInfo } = useContext(BoardContext);

  // Card size
  let cardSize = {
    padding: '3rem',
    border: '#ccc 1px dotted',
    margin: '0.7rem auto',
    width: '1250px',
    height: '800px',
  };

  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className='all-center' style={cardSize}>
      <img src={info} alt='' style={{ width: '100%' }} />
      <button
        style={{ marginTop: '30px' }}
        className='btn btn-danger'
        onClick={handleShowInfo}
      >
        確認
      </button>
    </div>
  );
}

export default TestInfo;
