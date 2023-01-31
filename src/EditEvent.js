import React, { useState } from 'react';
import Event from './Event';
import uuid from 'uuid';

const EditEvent = ({ events, addEvent }) => {
  // State
  const [title, setTitle] = useState('');
  const [e1Point, setE1Point] = useState('');
  const [e1Type, setE1Type] = useState('');
  const [desc, setDesc] = useState('');

  // Handle functions
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleE1Point = (e) => {
    setE1Point(e.target.value);
  };

  const handleE1Type = (e) => {
    setE1Type(e.target.value);
  };

  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  // onSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    let newEvent = {
      title,
      desc,
      e1Point,
      e1Type,
      id: uuid(),
    };

    addEvent(newEvent);
  };

  return (
    <div className='edit-window-2'>
      <div>
        <div className='text-center' style={{ marginBottom: '1rem' }}>
          <h2>Event overview</h2>
          <p>{`You have added 2 event(s).`}</p>

          <div className='text-center'>
            {events.map((event) => (
              <Event key={event.id} id={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>

      <div className='container-right'>
        <div className='text-center'>
          <h2>Add an event</h2>
        </div>
        <form className='form' onSubmit={onSubmit}>
          <h4>Title</h4>
          <input
            type='text'
            name='title'
            placeholder='Enter Title...'
            value={title}
            onChange={handleTitle}
          ></input>
          <br />
          <h4>Points for each one of the type</h4>
          <div style={inputStyle}>
            <input
              type='text'
              name='e1Point'
              placeholder='Enter Points...'
              value={e1Point}
              onChange={handleE1Point}
            ></input>
            <input
              type='text'
              name='e1Type'
              placeholder='Enter Type...'
              value={e1Type}
              onChange={handleE1Type}
            ></input>
          </div>
          <br />
          <h4>Description</h4>
          <input
            type='text'
            name='desc'
            placeholder='Enter Description...'
            value={desc}
            onChange={handleDesc}
          ></input>
          <br />
          <input
            type='submit'
            value='Add'
            className='btn btn-dark btn-block'
          ></input>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '0.3rem',
};

export default EditEvent;
