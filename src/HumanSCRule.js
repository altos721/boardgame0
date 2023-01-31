import React from 'react';
import { FaTimes } from 'react-icons/fa';

function HumanSCRule({ rule, id, deleteHumanSCRule }) {
  // Rule size
  let ruleSize = {
    width: '90%',
    height: '120px',
    margin: 'auto',
    display: 'inline-block',
  };

  const ruleDetail = (
    <div>
      <div>
        目標key: {rule.targetKey}
        <p>該組的卡牌數量: {rule.numCardsInSet}</p>
        <p>分數: {rule.score}</p>
        {rule.numCardsInSet === 1 && (
          <p>卡牌 1: {`[${rule.card1.card1Group}, ${rule.card1.card1Type}]`}</p>
        )}
        {rule.numCardsInSet === 2 && (
          <p>
            卡牌 1: {`[${rule.card1.card1Group}, ${rule.card1.card1Type}]`}
            {'   '}
            卡牌 2: {`[${rule.card2.card2Group}, ${rule.card2.card2Type}]`}
          </p>
        )}
        {rule.numCardsInSet === 3 && (
          <p>
            卡牌 1: {`[${rule.card1.card1Group}, ${rule.card1.card1Type}]`}
            {'   '}
            卡牌 2: {`[${rule.card2.card2Group}, ${rule.card2.card2Type}]`}
            {'   '}
            卡牌 3: {`[${rule.card3.card3Group}, ${rule.card3.card3Type}]`}
          </p>
        )}
        {rule.numCardsInSet === 4 && (
          <p>
            卡牌 1: {`[${rule.card1.card1Group}, ${rule.card1.card1Type}]`}
            {'   '}
            卡牌 2: {`[${rule.card2.card2Group}, ${rule.card2.card2Type}]`}
            {'   '}
            卡牌 3: {`[${rule.card3.card3Group}, ${rule.card3.card3Type}]`}
            {'   '}
            卡牌 4: {`[${rule.card4.card4Group}, ${rule.card4.card4Type}]`}
          </p>
        )}
        {rule.numCardsInSet === 5 && (
          <p>
            卡牌 1: {`[${rule.card1.card1Group}, ${rule.card1.card1Type}]`}
            {'   '}
            卡牌 2: {`[${rule.card2.card2Group}, ${rule.card2.card2Type}]`}
            {'   '}
            卡牌 3: {`[${rule.card3.card3Group}, ${rule.card3.card3Type}]`}
            {'   '}
            卡牌 4: {`[${rule.card4.card4Group}, ${rule.card4.card4Type}]`}
            {'   '}
            卡牌 5: {`[${rule.card5.card5Group}, ${rule.card5.card5Type}]`}
          </p>
        )}
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
        <div className='card all-center' style={ruleSize}>
          {ruleDetail}
        </div>
        <button
          onClick={() => deleteHumanSCRule(id)}
          className='btn-middle btn-primary'
        >
          <FaTimes color='white' />
        </button>
      </div>
    </div>
  );
}

export default HumanSCRule;
