import React, { useContext, useEffect, useState } from 'react';
import uuid from 'uuid';
import BoardContext from './BoardContext';
import TestHumanQuestionOpt from './TestHumanQuestionOpt';

function TestHumanQuestion({ question }) {
  // Local state
  const [hasClick, setHasClick] = useState(false);
  const [showRightAnswer, setShowRightAnswer] = useState(false);
  const [shuffledOpts, setShuffledOpts] = useState([1, 2, 3, 4]);

  // Global state
  const { setShowTestQuestion, setMyHnadsIndex, humanCards, myHandsIndex } =
    useContext(BoardContext);

  // Question size
  let questionSize = {
    width: '700px',
    height: '420px',
    padding: '1rem',
    border: '#ccc 1px dotted',
    margin: '0.7rem auto',
  };

  let descSize = {
    height: '150px',
    padding: '40px',
  };

  const handleClick1 = (e) => {
    if (!hasClick) {
      if (question.answer === 1) {
        e.target.className = 'btn btn-success';

        let myHands = [];
        const index = Math.floor(Math.random() * humanCards.length);
        myHands.push({ index: index, id: uuid() });

        setMyHnadsIndex([...myHandsIndex, ...myHands]);
      } else {
        e.target.className = 'btn btn-danger';
        setShowRightAnswer(true);
      }
      setHasClick(true);
    }
  };

  const handleClick2 = (e) => {
    if (!hasClick) {
      if (question.answer === 2) {
        e.target.className = 'btn btn-success';

        let myHands = [];
        const index = Math.floor(Math.random() * humanCards.length);
        myHands.push({ index: index, id: uuid() });

        setMyHnadsIndex([...myHandsIndex, ...myHands]);
      } else {
        e.target.className = 'btn btn-danger';
        setShowRightAnswer(true);
      }
      setHasClick(true);
    }
  };

  const handleClick3 = (e) => {
    if (!hasClick) {
      if (question.answer === 3) {
        e.target.className = 'btn btn-success';

        let myHands = [];
        const index = Math.floor(Math.random() * humanCards.length);
        myHands.push({ index: index, id: uuid() });

        setMyHnadsIndex([...myHandsIndex, ...myHands]);
      } else {
        e.target.className = 'btn btn-danger';
        setShowRightAnswer(true);
      }
      setHasClick(true);
    }
  };

  const handleClick4 = (e) => {
    if (!hasClick) {
      if (question.answer === 4) {
        e.target.className = 'btn btn-success';

        let myHands = [];
        const index = Math.floor(Math.random() * humanCards.length);
        myHands.push({ index: index, id: uuid() });

        setMyHnadsIndex([...myHandsIndex, ...myHands]);
      } else {
        e.target.className = 'btn btn-danger';
        setShowRightAnswer(true);
      }
      setHasClick(true);
    }
  };

  const handleClose = () => {
    setShowTestQuestion(false);
    setHasClick(false);
    setShowRightAnswer(false);
  };

  useEffect(() => {
    let opts = [1, 2, 3, 4];
    opts = opts.sort(() => Math.random() - 0.5);
    setShuffledOpts(opts);
  }, []);

  const questionDetail = (
    <div>
      <div style={descSize}>{question.desc}</div>

      <div>
        <div className='legend'>
          {question.randomOpts === true
            ? shuffledOpts.map((e) => (
                <TestHumanQuestionOpt
                  showRightAnswer={showRightAnswer}
                  question={question}
                  handleClick4={handleClick4}
                  handleClick3={handleClick3}
                  handleClick2={handleClick2}
                  handleClick1={handleClick1}
                  order={e}
                  key={e}
                />
              ))
            : [1, 2, 3, 4].map((e) => (
                <TestHumanQuestionOpt
                  showRightAnswer={showRightAnswer}
                  question={question}
                  handleClick4={handleClick4}
                  handleClick3={handleClick3}
                  handleClick2={handleClick2}
                  handleClick1={handleClick1}
                  order={e}
                  key={e}
                />
              ))}
        </div>
        <button
          style={{ marginTop: '15px' }}
          className='btn btn-danger'
          onClick={handleClose}
        >
          關閉
        </button>
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
      </div>
    </div>
  );
}

export default TestHumanQuestion;
