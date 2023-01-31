import React, { useContext } from 'react';
import BoardContext from './BoardContext';

function Board() {
  const { board } = useContext(BoardContext);

  return (
    <div className='text-center' style={boardStyle}>
      <img src={board.image} alt='' />
    </div>
  );
}

const boardStyle = {
  padding: '1rem',
  border: '#ccc 1px dotted',
  margin: '0.7rem auto',
};

export default Board;
