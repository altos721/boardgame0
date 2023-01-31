import React, { useContext } from 'react';
import BoardContext from './BoardContext';
import { FaTrash, FaRuler, FaBookOpen } from 'react-icons/fa';

function TestHumanPosition() {
  // Global state
  const {
    humanPhases,
    phaseIndex,
    discardTestCard,
    chosenCard,
    positionUpperRow,
    positionLowerRow,
    positionMyHands,
    positionMyHands2,
    curPlayer,
    setMyHnadsIndex,
    upperRowIndex,
    humanSCRules,
    humanScore,
    setHumanScore,
    humanCards,
    settingGameMode,
    setShowTestQuestion,
    showTestQuestion,
    setTestQuestionIndex,
    questions,
  } = useContext(BoardContext);

  const handleApply = () => {
    const testHands = [];
    const testTypes = [];
    for (let i = 0; i < upperRowIndex.length; i++) {
      testHands.push(upperRowIndex[i].index);
    }

    // elements cards test
    if (settingGameMode === 'elements') {
      for (let i = 0; i < upperRowIndex.length; i++) {
        testTypes.push(humanCards[upperRowIndex[i].index].type);
      }
      if (humanSCRules.length > 0) {
        if (testTypes.length === 3) {
          if (testTypes.every((val, i, arr) => val === arr[0])) {
            setHumanScore(humanScore + humanSCRules[0].score);
          }
        } else if (testTypes.length === 2) {
          if (testTypes.every((val, i, arr) => val === arr[0])) {
            setHumanScore(humanScore + humanSCRules[1].score);
          }
        }
      }
    }

    console.log(testTypes);
    if (humanSCRules.length > 0) {
      if (
        upperRowIndex.length === 3 &&
        testHands.includes(0) &&
        testHands.includes(13) &&
        testHands.includes(16)
      ) {
        setHumanScore(humanScore + humanSCRules[0].score);
      }
      if (
        upperRowIndex.length === 5 &&
        testHands.includes(0) &&
        testHands.includes(13) &&
        testHands.includes(16) &&
        testHands.includes(5) &&
        testHands.includes(10)
      ) {
        setHumanScore(humanScore + humanSCRules[1].score);
      }
    }
  };

  const handleQuestion = () => {
    if (!showTestQuestion) {
      let index = Math.floor(Math.random() * questions.length);
      setShowTestQuestion(true);
      setTestQuestionIndex(index);
    }
  };

  const handleMyHandsTest = () => {
    if (settingGameMode === 'elements') {
      setMyHnadsIndex([
        { id: '111', index: 0 },
        { id: '222', index: 2 },
        { id: '333', index: 3 },
        { id: '444', index: 9 },
        { id: '555', index: 13 },
      ]);
    } else {
      setMyHnadsIndex([
        { id: '111', index: 0 },
        { id: '222', index: 13 },
        { id: '333', index: 16 },
        { id: '444', index: 5 },
        { id: '555', index: 10 },
      ]);
    }
  };

  return (
    <div className='all-center' style={boardstyle2}>
      {(humanPhases[phaseIndex].type === 'positionCards' ||
        humanPhases[phaseIndex].type === 'deal') && (
        <div>
          <div>
            <button
              style={{ marginTop: '15px' }}
              className='btn btn-white'
              onClick={() => positionUpperRow(chosenCard)}
            >
              放至第1排
            </button>
          </div>
          <div>
            <button
              style={{ marginTop: '15px' }}
              className='btn btn-white'
              onClick={() => positionLowerRow(chosenCard)}
            >
              放至第2排
            </button>
          </div>
          <div>
            {curPlayer === 1 && (
              <button
                style={{ marginTop: '15px' }}
                className='btn btn-white'
                onClick={() => positionMyHands(chosenCard)}
              >
                放至我的手牌
              </button>
            )}
            {curPlayer === 2 && (
              <button
                style={{ marginTop: '15px' }}
                className='btn btn-white'
                onClick={() => positionMyHands2(chosenCard)}
              >
                放至我的手牌
              </button>
            )}
          </div>
          <div className='legend'>
            <button
              style={{ marginTop: '15px' }}
              className='btn btn-dark'
              onClick={() => discardTestCard(chosenCard)}
            >
              <FaTrash size={18} />
            </button>
            {settingGameMode === 'default' && (
              <button
                style={{ marginTop: '15px' }}
                className='btn btn-dark'
                onClick={handleMyHandsTest}
              >
                Test
              </button>
            )}

            <button
              style={{ marginTop: '15px' }}
              className='btn btn-dark'
              onClick={handleApply}
            >
              <FaRuler size={18} />
            </button>
            <button
              style={{ marginTop: '15px' }}
              className='btn btn-dark'
              onClick={handleQuestion}
            >
              <FaBookOpen size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const boardstyle2 = {
  padding: '1rem',
  border: '#ccc 1px dotted',
  margin: '0.7rem auto',
  width: '300px',
  height: '260px',
};

export default TestHumanPosition;
