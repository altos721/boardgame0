import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import EditLeft from './EditLeft';
import EditMain from './EditMain';
import EditEvent from './EditEvent';
import EditIntro from './EditIntro';
import EditBoard from './EditBoard';
import TestLeft from './TestLeft';
import TestMain from './TestMain';
import HumanEditMain from './HumanEditMain';
import HumanEditPhase from './HumanEditPhase';
import HumanEditWinConditions from './HumanEditWinConditions';
import HumanEditGameSetting from './HumanEditGameSetting';
import HumanEditSCRule from './HumanEditSCRule';
import HumanEditIntro from './HumanEditIntro';
import HumanEditQuestion from './HumanEditQuestion';
import TestHumanMain from './TestHumanMain';
import Profile from './Profile';
import Info from './Info';
import './App.css';

import { BoardProvider } from './BoardContext';

function App() {
  const [mainFunc, setMainFunc] = useState('H-Deck');

  const [events, setEvents] = useState([]);

  // Add event
  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  // Change MainFunc
  const changeMainFunc = (mainFunc) => {
    setMainFunc(mainFunc);
  };

  return (
    <BoardProvider>
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <div className='edit-window'>
                    <EditLeft changeMainFunc={changeMainFunc} />
                    {mainFunc === 'Deck' && <EditMain />}
                    {mainFunc === 'Event' && (
                      <EditEvent events={events} addEvent={addEvent} />
                    )}
                    {mainFunc === 'Intro' && <EditIntro />}
                    {mainFunc === 'Board' && <EditBoard />}

                    {/* Human Behavior */}
                    {mainFunc === 'H-Deck' && <HumanEditMain />}
                    {mainFunc === 'H-Phase' && <HumanEditPhase />}
                    {mainFunc === 'H-WinConditions' && (
                      <HumanEditWinConditions />
                    )}
                    {mainFunc === 'H-GameSetting' && <HumanEditGameSetting />}
                    {mainFunc === 'H-SCRule' && <HumanEditSCRule />}
                    {mainFunc === 'H-Intro' && <HumanEditIntro />}
                    {mainFunc === 'H-Bonus' && <HumanEditQuestion />}
                  </div>
                </Fragment>
              )}
            />

            <Route
              exact
              path='/test'
              render={(props) => (
                <Fragment>
                  <div className='edit-window'>
                    <TestLeft />
                    <TestMain />
                  </div>
                </Fragment>
              )}
            />

            <Route
              exact
              path='/test-human'
              render={(props) => (
                <Fragment>
                  <div>
                    <TestHumanMain />
                  </div>
                </Fragment>
              )}
            />

            <Route
              exact
              path='/profile'
              render={(props) => (
                <Fragment>
                  <div>
                    <Profile />
                  </div>
                </Fragment>
              )}
            />

            <Route
              exact
              path='/info'
              render={(props) => (
                <Fragment>
                  <div>
                    <Info />
                  </div>
                </Fragment>
              )}
            />
          </Switch>
        </div>
      </Router>
    </BoardProvider>
  );
}

export default App;
