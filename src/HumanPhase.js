import {
  FaTimes,
  FaGripVertical,
  FaHamsa,
  FaRegClock,
  FaVoteYea,
  FaDice,
  FaExchangeAlt,
} from 'react-icons/fa';
import React from 'react';

const HumanPhase = ({ phase, id, deleteHumanPhase }) => {
  // Phase size
  let phaseSize = {
    width: '90%',
    height: '100px',
    margin: 'auto',
    display: 'inline-block',
  };

  const phaseDetail = (
    <div>
      {phase.type === 'deal' && (
        <div>
          類型: 發牌 <FaGripVertical size={28} />
          <p>數量: {phase.number}</p>
          <p>清空手牌: {phase.replacement === true ? '是' : '否'}</p>
        </div>
      )}
      {phase.type === 'positionCards' && (
        <div>
          類型: 放置卡牌 <FaHamsa size={28} />
        </div>
      )}
      {phase.type === 'countdown' && (
        <div>
          類型: 倒數 <FaRegClock size={28} />
          <p>時間: {phase.countdown} 秒</p>
        </div>
      )}
      {phase.type === 'shuffle' && (
        <div>
          類型: 洗牌 <FaExchangeAlt size={28} />
          <p>目標: {phase.shuffle === 'deck' ? '桌面' : '手牌'} </p>
        </div>
      )}

      {phase.type === 'vote' && (
        <div>
          類型: 投票 <FaVoteYea size={28} />
        </div>
      )}
      {phase.type === 'dice' && (
        <div>
          類型: 擲骰 <FaDice size={28} />
        </div>
      )}
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
        <div className='card all-center' style={phaseSize}>
          {phaseDetail}
        </div>
        <button
          onClick={() => deleteHumanPhase(id)}
          className='btn-middle btn-primary'
        >
          <FaTimes color='white' />
        </button>
      </div>
    </div>
  );
};

export default HumanPhase;
