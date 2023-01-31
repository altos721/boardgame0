import React, { useState } from 'react';

const EditLeft = ({ changeMainFunc }) => {
  // Computer-driven
  const toggleMainDeck = (e) => {
    changeMainFunc('Deck');
  };

  const toggleMainEvent = () => {
    changeMainFunc('Event');
  };

  const toggleMainIntro = () => {
    changeMainFunc('Intro');
  };

  const toggleMainBoard = () => {
    changeMainFunc('Board');
  };

  // Human behavior
  const toggleHumanMainDeck = (e) => {
    changeMainFunc('H-Deck');
  };

  const toggleHumanMainPhase = (e) => {
    changeMainFunc('H-Phase');
  };

  const toggleHumanMainWinConditions = (e) => {
    changeMainFunc('H-WinConditions');
  };

  const toggleHumanMainGameSetting = (e) => {
    changeMainFunc('H-GameSetting');
  };

  const toggleHumanMainSCRule = (e) => {
    changeMainFunc('H-SCRule');
  };

  const toggleHumanMainIntro = (e) => {
    changeMainFunc('H-Intro');
  };

  const toggleHumanMainSave = (e) => {
    if (window.confirm('儲存遊戲設定?')) {
    }
  };

  const toggleHumanMainBonus = (e) => {
    changeMainFunc('H-Bonus');
  };

  return (
    <div>
      {/* <div style={{ margin: '0 0.5rem' }}>
        <h3>Computer-driven</h3>
      </div>
      <ul className='list'>
        <li onClick={toggleMainDeck} key='Deck'>
          Deck
        </li>
        <li onClick={toggleMainEvent} key='Event'>
          Event
        </li>
        <li onClick={toggleMainIntro} key='Intro'>
          Intro
        </li>
        <li onClick={toggleMainBoard} key='Board'>
          Board
        </li>
      </ul> */}

      <div style={{ margin: '3rem 0 0 0.5rem' }}>
        {/* <h3>Human behavioral</h3> */}
      </div>
      <ul className='list'>
        <li onClick={toggleHumanMainDeck} key='H-Deck'>
          牌組
        </li>
        <li onClick={toggleHumanMainPhase} key='H-Phase'>
          流程
        </li>
        <li onClick={toggleHumanMainWinConditions} key='H-WinConditions'>
          勝利條件
        </li>
        <li onClick={toggleHumanMainGameSetting} key='H-GameSetting'>
          遊戲設定
        </li>
        <li onClick={toggleHumanMainSCRule} key='H-SCRule'>
          收集成套規則
        </li>
        <li onClick={toggleHumanMainBonus} key='H-Bonus'>
          題組
        </li>
        <li onClick={toggleHumanMainIntro} key='H-Intro'>
          遊戲說明
        </li>
        <li onClick={toggleHumanMainSave} key='H-Save'>
          儲存設定
        </li>
      </ul>
    </div>
  );
};

export default EditLeft;
