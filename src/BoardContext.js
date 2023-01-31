import { createContext, useState } from 'react';
import uuid from 'uuid';
import cabbage from './images/cabbage.png';
import onion from './images/onion.png';
import pepper from './images/pepper.png';
import ruleOnion from './images/rule-onions.png';
import ruleCabbage from './images/rule-cabbage.png';
import rulePepOni from './images/rule-pep_oni.png';
import introImage from './images/intro.png';
import boardImage from './images/board.jpeg';
import elementIntro from './images/elements/element-ex-intro.jpg';
import { cardsDefault } from './cardsDefault';
import { elements } from './elements';
import { cardsDixit } from './cardsDixit';
import { cardsPointSalad } from './cardsPointSalad';
import { elementsQuestions } from './elementsQuestions';

const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  // Computer-driven
  // Card deck
  const [cards, setCards] = useState([
    {
      title: 'cabbage',
      image: cabbage,
      backImage: ruleOnion,
      cardWidth: '200',
      cardHeight: '280',
      id: '1',
      rule: 'onions',
    },
    {
      title: 'cabbage',
      image: cabbage,
      backImage: ruleOnion,
      cardWidth: '200',
      cardHeight: '280',
      id: '2',
      rule: 'onions',
    },
    {
      title: 'cabbage',
      image: cabbage,
      backImage: ruleOnion,
      cardWidth: '200',
      cardHeight: '280',
      id: '3',
      rule: 'onions',
    },
    {
      title: 'cabbage',
      image: cabbage,
      backImage: ruleOnion,
      cardWidth: '200',
      cardHeight: '280',
      id: '4',
      rule: 'onions',
    },
    {
      title: 'onion',
      image: onion,
      backImage: ruleCabbage,
      cardWidth: '200',
      cardHeight: '280',
      id: '5',
      rule: 'cabbage',
    },
    {
      title: 'onion',
      image: onion,
      backImage: ruleCabbage,
      cardWidth: '200',
      cardHeight: '280',
      id: '6',
      rule: 'cabbage',
    },
    {
      title: 'onion',
      image: onion,
      backImage: ruleCabbage,
      cardWidth: '200',
      cardHeight: '280',
      id: '7',
      rule: 'cabbage',
    },
    {
      title: 'onion',
      image: onion,
      backImage: ruleCabbage,
      cardWidth: '200',
      cardHeight: '280',
      id: '8',
      rule: 'cabbage',
    },
    {
      title: 'onion',
      image: onion,
      backImage: ruleCabbage,
      cardWidth: '200',
      cardHeight: '280',
      id: '9',
      rule: 'cabbage',
    },
    {
      title: 'pepper',
      image: pepper,
      backImage: rulePepOni,
      cardWidth: '200',
      cardHeight: '280',
      id: '10',
      rule: 'pepOni',
    },
    {
      title: 'pepper',
      image: pepper,
      backImage: rulePepOni,
      cardWidth: '200',
      cardHeight: '280',
      id: '11',
      rule: 'pepOni',
    },
    {
      title: 'pepper',
      image: pepper,
      backImage: rulePepOni,
      cardWidth: '200',
      cardHeight: '280',
      id: '12',
      rule: 'pepOni',
    },
    {
      title: 'pepper',
      image: pepper,
      backImage: rulePepOni,
      cardWidth: '200',
      cardHeight: '280',
      id: '13',
      rule: 'pepOni',
    },
  ]);

  // Add cards
  const addCard = (newCards) => {
    setCards([...cards, ...newCards]);
  };

  // Delete card
  const deleteCard = (id) => {
    if (window.confirm('確定刪除?')) {
      setCards(cards.filter((c) => c.id !== id));
    }
  };

  // Intro
  const [intro, setIntro] = useState({
    title: 'Point Salad',
    image: introImage,
    desc: '',
  });

  // Add intro
  const addIntro = (newIntro) => {
    setIntro(newIntro);
  };

  // Board
  const [board, setBoard] = useState({
    image: boardImage,
  });

  // Add board
  const addBoard = (newBoard) => {
    setBoard(newBoard);
  };

  // Human behavior
  // Human cards
  const [humanCards, setHumanCards] = useState([...cardsDefault]);

  // Human phases
  const [humanPhases, setHumanPhases] = useState([
    { type: 'deal', number: 1, replacement: true, id: 1 },
    { type: 'countdown', countdown: 5, id: 2 },
    { type: 'dice', id: 3 },
  ]);

  // Human test default score
  const [humanScore, setHumanScore] = useState(0);
  const [human2Score, setHuman2Score] = useState(0);

  // Human win conditions
  const [humanWinConditions, setHumanWinConditions] = useState({
    defaultScore: 0,
    winType: 'none',
    winScore: 100,
    winMessage: '',
  });

  // Check if game over
  const checkGameover = () => {
    if (
      humanWinConditions.winType === 'greater' &&
      humanScore > humanWinConditions.winScore
    ) {
      setGameover(true);
    } else if (
      humanWinConditions.winType === 'less' &&
      humanScore < humanWinConditions.winScore
    ) {
      setGameover(true);
    }
  };

  // Add human score
  const addHumanScore = () => {
    setHumanScore(humanScore + 1);
  };

  // Reduce human score
  const reduceHumanScore = () => {
    setHumanScore(humanScore - 1);
  };

  const addHuman2Score = () => {
    setHuman2Score(human2Score + 1);
  };

  // Reduce human score
  const reduceHuman2Score = () => {
    setHuman2Score(human2Score - 1);
  };

  // Add human cards
  const addHumanCard = (newCards) => {
    setHumanCards([...humanCards, newCards]);
  };

  // Delete human card
  const deleteHumanCard = (id) => {
    if (window.confirm('確定刪除?')) {
      setHumanCards(humanCards.filter((c) => c.id !== id));
    }
  };

  // Add human phases
  const addHumanPhase = (newPhase) => {
    setHumanPhases([...humanPhases, newPhase]);
  };

  // Delete human phases
  const deleteHumanPhase = (id) => {
    if (window.confirm('確定刪除??')) {
      setHumanPhases(humanPhases.filter((p) => p.id !== id));
    }
  };

  // Record test human card from deal
  const [testHumanCards, setTestHumanCards] = useState([]);
  const addTestHumanCard = (newCard) => {
    if (testHumanCards.length < 5) {
      setTestHumanCards([newCard, ...testHumanCards]);
    } else if (testHumanCards.length === 5) {
      const newCardsIndex = [newCard, ...testHumanCards];
      setTestHumanCards(newCardsIndex.slice(0, 5));
    }
  };

  // Test human phase count
  const [phaseIndex, setPhaseIndex] = useState(0);

  // Test human myhands
  const [myHandsIndex, setMyHnadsIndex] = useState([]);

  // Test human myhands 2 (player 2)
  const [myHands2Index, setMyHnads2Index] = useState([]);

  // Test human hands upper row
  const [upperRowIndex, setUpperRowIndex] = useState([]);

  // Test human hands lower row
  const [lowerRowIndex, setLowerRowIndex] = useState([]);

  // Test human position choosen card
  const [chosenCard, setChosenCard] = useState({});

  // Test human game over
  const [gameover, setGameover] = useState(false);

  // Test human position discard
  const discardTestCard = (targetCard) => {
    if (chosenCard !== {}) {
      if (chosenCard.from === 'myHands') {
        setMyHnadsIndex(myHandsIndex.filter((p) => p.id !== targetCard.id));
      } else if (chosenCard.from === 'upperRow') {
        setUpperRowIndex(upperRowIndex.filter((p) => p.id !== targetCard.id));
      } else if (chosenCard.from === 'lowerRow') {
        setLowerRowIndex(lowerRowIndex.filter((p) => p.id !== targetCard.id));
      } else if (chosenCard.from === 'myHands2') {
        setMyHnads2Index(myHands2Index.filter((p) => p.id !== targetCard.id));
      }
    }

    setChosenCard({});
  };

  // Test human position upper row
  const positionUpperRow = (targetCard) => {
    if (chosenCard !== {}) {
      let newCardId = { ...targetCard };
      newCardId.id = uuid();

      setUpperRowIndex([...upperRowIndex, newCardId]);

      discardTestCard(targetCard);
    }
  };

  // Test human position lower row
  const positionLowerRow = (targetCard) => {
    if (chosenCard !== {}) {
      let newCardId = { ...targetCard };
      newCardId.id = uuid();

      setLowerRowIndex([...lowerRowIndex, newCardId]);

      discardTestCard(targetCard);
    }
  };

  // Test human position my hands
  const positionMyHands = (targetCard) => {
    if (chosenCard !== {}) {
      let newCardId = { ...targetCard };
      newCardId.id = uuid();

      setMyHnadsIndex([...myHandsIndex, newCardId]);

      discardTestCard(targetCard);
    }
  };

  // Test human position my hands2 (player 2)
  const positionMyHands2 = (targetCard) => {
    if (chosenCard !== {}) {
      let newCardId = { ...targetCard };
      newCardId.id = uuid();

      setMyHnads2Index([...myHands2Index, newCardId]);

      discardTestCard(targetCard);
    }
  };

  // Test human restart
  const handleRestart = () => {
    setMyHnadsIndex([]);
    setUpperRowIndex([]);
    setLowerRowIndex([]);
    setGameover(false);
    setHumanScore(humanWinConditions.defaultScore);
    setPhaseIndex(0);
  };

  // Test human toggle hide cards
  const [hideCards, setHideCards] = useState(false);
  const toggleHide = () => {
    setHideCards(!hideCards);
  };

  // Test human toggle hide deck cards
  const [hideDeckCards, setHideDeckCards] = useState(false);
  const toggleDeckHide = () => {
    setHideDeckCards(!hideDeckCards);
  };

  // Test human edit game setting
  const [settingPlayerNumber, setSettingPlayerNumber] = useState(1);
  const [settingGameMode, setSettingGameMode] = useState('default');

  // Record drawn card's index
  const [drawnCardsIndex, setDrawnCardsIndex] = useState([]);

  // Test human mode track current player
  const [curPlayer, setCurPlayer] = useState(1);

  // Test human deck params when add cards
  const [allParams, setAllParams] = useState(['rank', 'kind']);

  // Test human SCRule
  const [humanSCRules, setHumanSCRules] = useState([]);
  const addHumanSCRule = (newSCRule) => {
    setHumanSCRules([...humanSCRules, newSCRule]);
  };

  // Delete human phases
  const deleteHumanSCRule = (id) => {
    if (window.confirm('確定刪除?')) {
      setHumanSCRules(humanSCRules.filter((p) => p.id !== id));
    }
  };

  // 7/26 Change deck cards
  const changeDeck = () => {
    if (settingGameMode === 'default') {
      setHumanCards([...cardsDefault]);
    } else if (settingGameMode === 'elements') {
      setHumanCards([...elements]);
    }
  };

  // 8/3 Intro & Bonus questions
  const [info, setInfo] = useState('');

  const [showInfo, setShowInfo] = useState(true);

  const [questions, setQuestions] = useState([]);
  // Add bonus question
  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  // Delete bonus question
  const deleteQuestion = (id) => {
    if (window.confirm('確定刪除?')) {
      setQuestions(questions.filter((p) => p.id !== id));
    }
  };

  const [showTestQuestion, setShowTestQuestion] = useState(false);
  const [testQuestionIndex, setTestQuestionIndex] = useState(0);

  return (
    <BoardContext.Provider
      value={{
        cards,
        intro,
        board,
        humanCards,
        humanPhases,
        humanScore,
        human2Score,
        humanWinConditions,
        testHumanCards,
        phaseIndex,
        myHandsIndex,
        myHands2Index,
        upperRowIndex,
        lowerRowIndex,
        chosenCard,
        gameover,
        hideCards,
        hideDeckCards,
        settingPlayerNumber,
        settingGameMode,
        drawnCardsIndex,
        curPlayer,
        allParams,
        humanSCRules,
        cardsDefault,
        elements,
        cardsDixit,
        cardsPointSalad,
        info,
        elementIntro,
        showInfo,
        questions,
        showTestQuestion,
        testQuestionIndex,
        elementsQuestions,
        addCard,
        deleteCard,
        addIntro,
        addBoard,
        setHumanCards,
        addHumanCard,
        deleteHumanCard,
        addHumanPhase,
        deleteHumanPhase,
        addTestHumanCard,
        setHumanScore,
        addHumanScore,
        reduceHumanScore,
        setHuman2Score,
        addHuman2Score,
        reduceHuman2Score,
        setHumanWinConditions,
        setPhaseIndex,
        setMyHnadsIndex,
        setMyHnads2Index,
        setUpperRowIndex,
        setLowerRowIndex,
        discardTestCard,
        setChosenCard,
        positionUpperRow,
        positionLowerRow,
        positionMyHands,
        positionMyHands2,
        setGameover,
        checkGameover,
        handleRestart,
        toggleHide,
        toggleDeckHide,
        setSettingPlayerNumber,
        setSettingGameMode,
        setDrawnCardsIndex,
        setCurPlayer,
        setAllParams,
        setHumanSCRules,
        addHumanSCRule,
        deleteHumanSCRule,
        changeDeck,
        setInfo,
        setShowInfo,
        setQuestions,
        addQuestion,
        deleteQuestion,
        setShowTestQuestion,
        setTestQuestionIndex,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContext;
