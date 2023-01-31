import React, { useState, useContext } from 'react';
import BoardContext from './BoardContext';
import { cardsPointSalad } from './cardsPointSalad';

function HumanEditGameSetting() {
  // Locat state
  // default or setCollection
  const [gameMode, setGameMode] = useState('default');
  const [numPlayers, setNumPlayers] = useState(1);

  // Global state
  const {
    settingPlayerNumber,
    settingGameMode,
    setSettingPlayerNumber,
    setSettingGameMode,
    setHumanCards,
    cardsDefault,
    elements,
    cardsDixit,
    cardsPointSalad,
    setAllParams,
    setInfo,
    elementIntro,
    elementsQuestions,
    setQuestions,
  } = useContext(BoardContext);

  // Handle functions
  const handleGameMode = (e) => {
    setGameMode(e.target.value);
  };

  const handleNumPlayers = (e) => {
    setNumPlayers(e.target.value);
  };

  // OnSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    let newNumPlayers = parseInt(numPlayers, 10);

    setSettingGameMode(gameMode);
    setSettingPlayerNumber(newNumPlayers);

    if (gameMode === 'default') {
      setHumanCards([...cardsDefault]);
      setAllParams(['rank', 'kind']);
      setInfo('');
      setQuestions([]);
    } else if (gameMode === 'elements') {
      setHumanCards([...elements]);
      setAllParams(['type']);
      setInfo(elementIntro);
      setQuestions(elementsQuestions);
    } else if (gameMode === 'dixit') {
      setHumanCards([...cardsDixit]);
      setAllParams([]);
      setInfo('');
      setQuestions([]);
    } else if (gameMode === 'pointSalad') {
      setHumanCards([...cardsPointSalad]);
      setAllParams(['type']);
      setInfo('');
      setQuestions([]);
    }
  };

  return (
    <div className='edit-window-2'>
      <div>
        <div className='text-center' style={{ marginBottom: '1rem' }}>
          <h2>遊戲設定</h2>
          <br />
          {settingGameMode === 'default' && <h3>{`遊戲模式: 預設`}</h3>}
          {settingGameMode === 'elements' && (
            <h3>{`遊戲模式: 元素週期表範例`}</h3>
          )}
          {settingGameMode === 'dixit' && <h3>{`遊戲模式: 說書人`}</h3>}
          {settingGameMode === 'pointSalad' && <h3>{`遊戲模式: 得分沙拉`}</h3>}

          <br />
          <h3>{`玩家人數: ${settingPlayerNumber}`}</h3>
        </div>
      </div>

      <div className='container-right'>
        <div className='text-center'>
          <h2>遊戲設定</h2>
        </div>
        <form className='form' onSubmit={onSubmit}>
          <h4>遊戲模式</h4>
          <select
            name='gameMode'
            id='gameMode'
            value={gameMode}
            onChange={handleGameMode}
          >
            <option value='default'>預設</option>
            <option value='setCollection'>收集成套</option>
            <option value='elements'>元素週期表範例</option>
            <option value='dixit'>說書人</option>
            <option value='pointSalad'>得分沙拉</option>
          </select>
          <br />
          <h4>玩家人數</h4>{' '}
          <select
            name='numPlayers'
            id='numPlayers'
            value={numPlayers}
            onChange={handleNumPlayers}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
          <br />
          <input
            type='submit'
            value='確認'
            className='btn btn-dark btn-block'
          ></input>
        </form>
      </div>
    </div>
  );
}

export default HumanEditGameSetting;
