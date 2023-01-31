import React, { useContext, useEffect } from 'react';
import uuid from 'uuid';
import TestHumanCardInHands from './TestHumanCardInHands';
import BoardContext from './BoardContext';

function TestHumanMyHands() {
  // Global states
  const {
    humanCards,
    humanPhases,
    phaseIndex,
    myHandsIndex,
    setMyHnadsIndex,
    drawnCardsIndex,
    setDrawnCardsIndex,
  } = useContext(BoardContext);

  useEffect(() => {
    drawIndexInitial();
  }, [phaseIndex]);

  const myHands = [];

  const drawIndexInitial = () => {
    if (humanPhases[phaseIndex].type === 'deal') {
      if (humanPhases[phaseIndex].replacement === true) {
        const drawnCards = [];
        for (let i = 0; i < humanPhases[phaseIndex].number; i++) {
          // Prevent repeated card drawn
          if (
            humanCards.length - drawnCardsIndex.length >=
            humanPhases[phaseIndex].number
          ) {
            let index = Math.floor(Math.random() * humanCards.length);
            while (
              drawnCardsIndex.includes(index) ||
              drawnCards.includes(index)
            ) {
              index = Math.floor(Math.random() * humanCards.length);
            }
            if (
              !drawnCardsIndex.includes(index) &&
              !drawnCards.includes(index)
            ) {
              myHands.push({ index: index, id: uuid() });
              drawnCards.push(index);
            }
          } else if (
            humanCards.length - drawnCardsIndex.length <
              humanPhases[phaseIndex].number &&
            humanCards.length - drawnCardsIndex.length > 0
          ) {
            const notDrawn = Array(humanCards.length)
              .fill()
              .map((element, ind) => ind + 0);
            const diff = notDrawn.filter((x) => !drawnCardsIndex.includes(x));
            for (let j = 0; j < diff.length; j++) {
              myHands.push({ index: diff[j], id: uuid() });
              drawnCards.push(diff[j]);
            }
            break;
          }
        }
        setMyHnadsIndex(myHands);
        setDrawnCardsIndex([...drawnCardsIndex, ...drawnCards]);
      } else if (
        humanPhases[phaseIndex].replacement === false &&
        humanPhases[phaseIndex].number - myHandsIndex.length > 0
      ) {
        for (
          let i = 0;
          i < humanPhases[phaseIndex].number - myHandsIndex.length;
          i++
        ) {
          const index = Math.floor(Math.random() * humanCards.length);
          myHands.push({ index: index, id: uuid() });
        }
        setMyHnadsIndex([...myHandsIndex, ...myHands]);
      }
    }
  };

  return (
    <div>
      {myHandsIndex.map((c) => (
        <TestHumanCardInHands
          cardIndex={c.index}
          key={c.id}
          id={c.id}
          chosenFrom={'myHands'}
        />
      ))}
    </div>
  );
}

export default TestHumanMyHands;
