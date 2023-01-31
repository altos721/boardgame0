import React from 'react';
import { FaTimes } from 'react-icons/fa';

function HumanQuestion({ question, id, deleteQuestion }) {
  // Question size
  let questionSize = {
    width: '700px',
    height: '300px',
    margin: 'auto',
    display: 'inline-block',
  };

  let descSize = {
    height: '150px',
    padding: '50px',
  };

  const questionDetail = (
    <div>
      <div style={descSize}>{question.desc}</div>

      <div>
        <div className='legend'>
          {question.opt1 !== '' && (
            <button
              style={{ marginTop: '15px', width: '250px' }}
              className={
                question.answer === 1 ? 'btn btn-success' : 'btn btn-white'
              }
            >
              {question.opt1}
            </button>
          )}

          {question.opt2 !== '' && (
            <button
              style={{ marginTop: '15px', marginLeft: '20px', width: '250px' }}
              className={
                question.answer === 2 ? 'btn btn-success' : 'btn btn-white'
              }
            >
              {question.opt2}
            </button>
          )}
        </div>

        <div className='legend'>
          {question.opt3 !== '' && (
            <button
              style={{ marginTop: '15px', width: '250px' }}
              className={
                question.answer === 3 ? 'btn btn-success' : 'btn btn-white'
              }
            >
              {question.opt3}
            </button>
          )}

          {question.opt4 !== '' && (
            <button
              style={{ marginTop: '15px', marginLeft: '20px', width: '250px' }}
              className={
                question.answer === 4 ? 'btn btn-success' : 'btn btn-white'
              }
            >
              {question.opt4}
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className='text-center'
      style={{
        display: 'block',
        margin: '0.3rem 0',
        position: 'relative',
      }}
    >
      <div>
        <div className='card all-center' style={questionSize}>
          {questionDetail}
        </div>
        <button
          onClick={() => deleteQuestion(id)}
          className='btn-middle btn-primary'
        >
          <FaTimes color='white' />
        </button>
      </div>
    </div>
  );
}

export default HumanQuestion;
