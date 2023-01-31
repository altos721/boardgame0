import React, { useState, useContext } from 'react';
import HumanSCRule from './HumanSCRule';
import uuid from 'uuid';
import BoardContext from './BoardContext';

function HumanEditSCRule() {
  // Local state
  const [targetKey, setTargetKey] = useState('rank');
  const [numCardsInSet, setNumCardsInSet] = useState(3);
  // card 1
  const [card1Group, setCard1Group] = useState(1);
  const [card1Type, setCard1Type] = useState('same');
  const [card1CertainVal, setCard1CertainVal] = useState('');
  // card 2
  const [card2Group, setCard2Group] = useState(1);
  const [card2Type, setCard2Type] = useState('same');
  const [card2CertainVal, setCard2CertainVal] = useState('');
  // card 3
  const [card3Group, setCard3Group] = useState(1);
  const [card3Type, setCard3Type] = useState('same');
  const [card3CertainVal, setCard3CertainVal] = useState('');
  // card 4
  const [card4Group, setCard4Group] = useState(1);
  const [card4Type, setCard4Type] = useState('same');
  const [card4CertainVal, setCard4CertainVal] = useState('');
  // card 5
  const [card5Group, setCard5Group] = useState(1);
  const [card5Type, setCard5Type] = useState('same');
  const [card5CertainVal, setCard5CertainVal] = useState('');
  // Score
  const [score, setScore] = useState(10);

  // Global state
  const { allParams, humanSCRules, addHumanSCRule, deleteHumanSCRule } =
    useContext(BoardContext);

  // Handle functions
  const handleTargetKey = (e) => {
    setTargetKey(e.target.value);
  };

  const handleNumCardsInSet = (e) => {
    setNumCardsInSet(parseInt(e.target.value, 10));
  };

  // card 1
  const handleCard1Group = (e) => {
    setCard1Group(parseInt(e.target.value, 10));
  };
  const handleCard1Type = (e) => {
    setCard1Type(e.target.value);
  };
  const handleCard1CertainVal = (e) => {
    setCard1CertainVal(e.target.value);
  };

  // card 2
  const handleCard2Group = (e) => {
    setCard2Group(parseInt(e.target.value, 10));
  };
  const handleCard2Type = (e) => {
    setCard2Type(e.target.value);
  };
  const handleCard2CertainVal = (e) => {
    setCard2CertainVal(e.target.value);
  };

  // card 3
  const handleCard3Group = (e) => {
    setCard3Group(parseInt(e.target.value, 10));
  };
  const handleCard3Type = (e) => {
    setCard3Type(e.target.value);
  };
  const handleCard3CertainVal = (e) => {
    setCard3CertainVal(e.target.value);
  };

  // card 4
  const handleCard4Group = (e) => {
    setCard4Group(parseInt(e.target.value, 10));
  };
  const handleCard4Type = (e) => {
    setCard4Type(e.target.value);
  };
  const handleCard4CertainVal = (e) => {
    setCard4CertainVal(e.target.value);
  };

  // card 5
  const handleCard5Group = (e) => {
    setCard5Group(parseInt(e.target.value, 10));
  };
  const handleCard5Type = (e) => {
    setCard5Type(e.target.value);
  };
  const handleCard5CertainVal = (e) => {
    setCard5CertainVal(e.target.value);
  };

  // Handle score hunction
  const handleScore = (e) => {
    setScore(parseInt(e.target.value, 10));
  };

  // OnSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    let newSCRule = { targetKey, numCardsInSet, id: uuid(), score };
    const card1 = { card1Group, card1Type, card1CertainVal };
    const card2 = { card2Group, card2Type, card2CertainVal };
    const card3 = { card3Group, card3Type, card3CertainVal };
    const card4 = { card4Group, card4Type, card4CertainVal };
    const card5 = { card5Group, card5Type, card5CertainVal };
    newSCRule.card1 = card1;
    newSCRule.card2 = card2;
    newSCRule.card3 = card3;
    newSCRule.card4 = card4;
    newSCRule.card5 = card5;

    addHumanSCRule(newSCRule);
    console.log(humanSCRules);
  };

  // Card rule details
  // Card 1
  const Card1 = (
    <div>
      <>
        <label htmlFor='card1Rule'>
          <h4>{'卡牌 1'}</h4>
        </label>

        <div style={inputStyle}>
          <label htmlFor='card1Group'>
            <h4>{'組別:'}</h4>
          </label>
          <select
            name='card1Group'
            id='card1Group'
            value={card1Group}
            onChange={handleCard1Group}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        <div style={inputStyle}>
          <label htmlFor='card1Type'>
            <h4>{'類型:'}</h4>
          </label>
          <select
            name='card1Type'
            id='card1Type'
            value={card1Type}
            onChange={handleCard1Type}
          >
            <option value='same'>value相同</option>
            <option value='certain'>特定value</option>
            <option value='incremental'>遞增數字</option>
          </select>
        </div>

        {card1Type === 'certain' && (
          <div style={inputStyle}>
            <div></div>
            <input
              type='text'
              name='val-1'
              placeholder='輸入value...'
              value={card1CertainVal}
              onChange={handleCard1CertainVal}
            ></input>
          </div>
        )}
      </>
      <br />
    </div>
  );

  // Card 2
  const Card2 = (
    <div>
      <>
        <label htmlFor='card1Rule'>
          <h4>{'卡牌 2'}</h4>
        </label>

        <div style={inputStyle}>
          <label htmlFor='card2Group'>
            <h4>{'組別:'}</h4>
          </label>
          <select
            name='card2Group'
            id='card2Group'
            value={card2Group}
            onChange={handleCard2Group}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        <div style={inputStyle}>
          <label htmlFor='card1Type'>
            <h4>{'類型:'}</h4>
          </label>
          <select
            name='card2Type'
            id='card2Type'
            value={card2Type}
            onChange={handleCard2Type}
          >
            <option value='same'>value相同</option>
            <option value='certain'>特定value</option>
            <option value='incremental'>遞增數字</option>
          </select>
        </div>

        {card2Type === 'certain' && (
          <div style={inputStyle}>
            <div></div>
            <input
              type='text'
              name='val-2'
              placeholder='輸入Value...'
              value={card2CertainVal}
              onChange={handleCard2CertainVal}
            ></input>
          </div>
        )}
      </>
      <br />
    </div>
  );

  // Card 3
  const Card3 = (
    <div>
      <>
        <label htmlFor='card3Rule'>
          <h4>{'卡牌 3'}</h4>
        </label>

        <div style={inputStyle}>
          <label htmlFor='card3Group'>
            <h4>{'組別:'}</h4>
          </label>
          <select
            name='card3Group'
            id='card3Group'
            value={card3Group}
            onChange={handleCard3Group}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        <div style={inputStyle}>
          <label htmlFor='card3Type'>
            <h4>{'類型:'}</h4>
          </label>
          <select
            name='card3Type'
            id='card3Type'
            value={card3Type}
            onChange={handleCard3Type}
          >
            <option value='same'>value相同</option>
            <option value='certain'>特定value</option>
            <option value='incremental'>遞增數字</option>
          </select>
        </div>

        {card3Type === 'certain' && (
          <div style={inputStyle}>
            <div></div>
            <input
              type='text'
              name='val-3'
              placeholder='輸入Value...'
              value={card3CertainVal}
              onChange={handleCard3CertainVal}
            ></input>
          </div>
        )}
      </>
      <br />
    </div>
  );

  // Card 4
  const Card4 = (
    <div>
      <>
        <label htmlFor='card4Rule'>
          <h4>{'卡牌 4'}</h4>
        </label>

        <div style={inputStyle}>
          <label htmlFor='card4Group'>
            <h4>{'組別:'}</h4>
          </label>
          <select
            name='card4Group'
            id='card4Group'
            value={card4Group}
            onChange={handleCard4Group}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        <div style={inputStyle}>
          <label htmlFor='card4Type'>
            <h4>{'類型:'}</h4>
          </label>
          <select
            name='card4Type'
            id='card4Type'
            value={card4Type}
            onChange={handleCard4Type}
          >
            <option value='same'>value相同</option>
            <option value='certain'>特定value</option>
            <option value='incremental'>遞增數字</option>
          </select>
        </div>

        {card4Type === 'certain' && (
          <div style={inputStyle}>
            <div></div>
            <input
              type='text'
              name='val-4'
              placeholder='輸入Value...'
              value={card4CertainVal}
              onChange={handleCard4CertainVal}
            ></input>
          </div>
        )}
      </>
      <br />
    </div>
  );

  // Card 5
  const Card5 = (
    <div>
      <>
        <label htmlFor='card5Rule'>
          <h4>{'卡牌 5'}</h4>
        </label>

        <div style={inputStyle}>
          <label htmlFor='card5Group'>
            <h4>{'組別:'}</h4>
          </label>
          <select
            name='card5Group'
            id='card5Group'
            value={card5Group}
            onChange={handleCard5Group}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        <div style={inputStyle}>
          <label htmlFor='card5Type'>
            <h4>{'類型:'}</h4>
          </label>
          <select
            name='card5Type'
            id='card5Type'
            value={card5Type}
            onChange={handleCard5Type}
          >
            <option value='same'>value相同</option>
            <option value='certain'>特定value</option>
            <option value='incremental'>遞增數字</option>
          </select>
        </div>

        {card5Type === 'certain' && (
          <div style={inputStyle}>
            <div></div>
            <input
              type='text'
              name='val-5'
              placeholder='輸入Value...'
              value={card5CertainVal}
              onChange={handleCard5CertainVal}
            ></input>
          </div>
        )}
      </>
      <br />
    </div>
  );

  return (
    <div className='edit-window-2'>
      <div>
        <div className='text-center' style={{ marginBottom: '1rem' }}>
          <h2>收集成套規則</h2>
          <p>{`目前遊戲一共有 ${humanSCRules.length}條規則.`}</p>
        </div>
        <div className='text-center'>
          {humanSCRules.map((rule) => (
            <HumanSCRule
              key={rule.id}
              id={rule.id}
              rule={rule}
              deleteHumanSCRule={deleteHumanSCRule}
            />
          ))}
        </div>
      </div>

      <div className='container-right'>
        <div className='text-center'>
          <h2>新增規則</h2>
        </div>
        <form className='form' onSubmit={onSubmit}>
          <label htmlFor='targetKey'>
            <h4>選擇目標的key</h4>
          </label>
          <select
            name='targetKey'
            id='targetKey'
            value={targetKey}
            onChange={handleTargetKey}
          >
            {allParams.map((p, index) => (
              <option value={p} key={index}>
                {p}
              </option>
            ))}
          </select>

          <br />

          <label htmlFor='numCardsInSet'>
            <h4>該組的卡牌數量</h4>
          </label>
          <select
            name='numCardsInSet'
            id='numCardsInSet'
            value={numCardsInSet}
            onChange={handleNumCardsInSet}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>

          <br />

          {numCardsInSet >= 1 && Card1}
          {numCardsInSet >= 2 && Card2}
          {numCardsInSet >= 3 && Card3}
          {numCardsInSet >= 4 && Card4}
          {numCardsInSet >= 5 && Card5}

          <label htmlFor='numCardsInSet'>
            <h4>分數</h4>
          </label>
          <input
            type='text'
            name='score'
            placeholder='輸入分數...'
            value={score}
            onChange={handleScore}
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

const inputStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '0.3rem',
};

export default HumanEditSCRule;
