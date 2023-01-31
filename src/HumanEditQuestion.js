import React, { useState, useContext } from 'react';
import uuid from 'uuid';
import HumanQuestion from './HumanQuestion';
import BoardContext from './BoardContext';

function HumanEditQuestion() {
  // State
  const [desc, setDesc] = useState('');
  const [opt1, setOpt1] = useState('');
  const [opt2, setOpt2] = useState('');
  const [opt3, setOpt3] = useState('');
  const [opt4, setOpt4] = useState('');
  const [answer, setAnswer] = useState(1);
  const [randomOpts, setRandomOpts] = useState(true);

  // Global state
  const { questions, addQuestion, deleteQuestion } = useContext(BoardContext);

  // Handle functions
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleOpt1 = (e) => {
    setOpt1(e.target.value);
  };

  const handleOpt2 = (e) => {
    setOpt2(e.target.value);
  };

  const handleOpt3 = (e) => {
    setOpt3(e.target.value);
  };

  const handleOpt4 = (e) => {
    setOpt4(e.target.value);
  };

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const handleRandomOpts = (e) => {
    setRandomOpts(e.target.value);
  };

  // OnSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    let newAnswer = parseInt(answer, 10);
    let newRandomOpts = randomOpts === 'true';

    // Add card to deck
    let newQuestion = {
      desc,
      opt1,
      opt2,
      opt3,
      opt4,
      answer: newAnswer,
      randomOpts: newRandomOpts,
      id: uuid(),
    };

    addQuestion(newQuestion);
    setDesc('');
    setOpt1('');
    setOpt2('');
    setOpt3('');
    setOpt4('');
    setAnswer(1);
  };

  return (
    <div className='edit-window-2'>
      <div>
        <div className='text-center' style={{ marginBottom: '1rem' }}>
          <h2>題組</h2>
          <p>{`目前遊戲一共有 ${questions.length} 道題目.`}</p>
        </div>
        <div className='text-center'>
          {questions.map((q) => (
            <HumanQuestion
              key={q.id}
              id={q.id}
              question={q}
              deleteQuestion={deleteQuestion}
              setDesc={setDesc}
              setOpt1={setOpt1}
              setOpt2={setOpt2}
              setOpt3={setOpt3}
              setOpt4={setOpt4}
              setAnswer={setAnswer}
            />
          ))}
        </div>
      </div>

      <div className='container-right'>
        <div className='text-center'>
          <h2>新增問題</h2>
        </div>
        <form className='form' onSubmit={onSubmit}>
          <label htmlFor='questionType'>
            <h4>{'題型'}</h4>
          </label>

          <select name='questionType' id='questionType'>
            <option value={'single'}>單選題</option>
            <option value={'multi'}>多重選擇題</option>
            <option value={'fill'}>填充題</option>
          </select>
          <br />

          <h4>題目描述</h4>
          <input
            type='text'
            name='desc'
            placeholder='輸入題目描述...'
            value={desc}
            onChange={handleDesc}
          ></input>
          <br />

          <h4>選項 1</h4>
          <input
            type='text'
            name='opt1'
            placeholder='輸入選項 1...'
            value={opt1}
            onChange={handleOpt1}
          ></input>
          <br />

          <h4>選項 2</h4>
          <input
            type='text'
            name='opt2'
            placeholder='輸入選項 2...'
            value={opt2}
            onChange={handleOpt2}
          ></input>
          <br />

          <h4>選項 3</h4>
          <input
            type='text'
            name='opt3'
            placeholder='輸入選項 3...'
            value={opt3}
            onChange={handleOpt3}
          ></input>
          <br />

          <h4>選項 4</h4>
          <input
            type='text'
            name='opt4'
            placeholder='輸入選項 4...'
            value={opt4}
            onChange={handleOpt4}
          ></input>
          <br />

          <label htmlFor='correctAnswer'>
            <h4>{'選擇正確答案'}</h4>
          </label>

          <select
            name='correctAnswer'
            id='correctAnswer'
            value={answer}
            onChange={handleAnswer}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
          <br />

          <label htmlFor='correctAnswer'>
            <h4>{'亂數選項'}</h4>
          </label>

          <select
            name='correctAnswer'
            id='correctAnswer'
            value={randomOpts}
            onChange={handleRandomOpts}
          >
            <option value={true}>是</option>
            <option value={false}>否</option>
          </select>
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

export default HumanEditQuestion;
