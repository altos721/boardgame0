import React from 'react';

const Intro = ({ intro }) => {
  return (
    <div className='text-center' style={introStyle}>
      <h1>{intro.title}</h1>
      <img src={intro.image} alt='' />
      <h2 style={{ marginBottom: '1rem' }}>{intro.desc}</h2>
      <button className='btn btn-primary'>Start</button>
    </div>
  );
};

const introStyle = {
  width: '600px',
  height: 'fit-content',
  padding: '1rem',
  border: '#ccc 1px dotted',
  margin: '0.7rem auto',
};

export default Intro;
