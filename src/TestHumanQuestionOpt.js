import React, { useContext } from 'react';
import BoardContext from './BoardContext';

function TestHumanQuestionOpt({
  showRightAnswer,
  question,
  handleClick4,
  handleClick3,
  handleClick2,
  handleClick1,
  order,
}) {
  if (order === 4) {
    return (
      <button
        style={{
          marginTop: '15px',
          marginLeft: '10px',
          marginRight: '10px',
          width: '250px',
        }}
        className={
          showRightAnswer && question.answer === 4
            ? 'btn btn-success'
            : 'btn btn-white'
        }
        onClick={handleClick4}
      >
        {question.opt4}
      </button>
    );
  } else if (order === 3) {
    return (
      <button
        style={{
          marginTop: '15px',
          marginLeft: '10px',
          marginRight: '10px',
          width: '250px',
        }}
        className={
          showRightAnswer && question.answer === 3
            ? 'btn btn-success'
            : 'btn btn-white'
        }
        onClick={handleClick3}
      >
        {question.opt3}
      </button>
    );
  } else if (order === 2) {
    return (
      <button
        style={{
          marginTop: '15px',
          marginLeft: '10px',
          marginRight: '10px',
          width: '250px',
        }}
        className={
          showRightAnswer && question.answer === 2
            ? 'btn btn-success'
            : 'btn btn-white'
        }
        onClick={handleClick2}
      >
        {question.opt2}
      </button>
    );
  } else if (order === 1) {
    return (
      <button
        style={{
          marginTop: '15px',
          marginLeft: '10px',
          marginRight: '10px',
          width: '250px',
        }}
        className={
          showRightAnswer && question.answer === 1
            ? 'btn btn-success'
            : 'btn btn-white'
        }
        onClick={handleClick1}
      >
        {question.opt1}
      </button>
    );
  }
}

export default TestHumanQuestionOpt;
