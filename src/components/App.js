import React from 'react';
import './App.css';
import Menu from './Menu';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Roster from './Roster';
import Wolt from './Wolt';
import PlayerData from './PlayerData';
import * as firebase from 'firebase';
import Rebase from 're-base';

const Div = styled.div`
  font-weight: bold;
`;

class App extends React.Component {
  state = {
    workoutLog: {},
    wolt: {},
    exercises: [],
    roster: []
  };

  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyAuTJK9FsbcZJeUpsZlPhAVz3EwGsouqRI',
      authDomain: 'bloodthirsty-website.firebaseapp.com',
      databaseURL: 'https://bloodthirsty-website.firebaseio.com',
      projectId: 'bloodthirsty-website',
      storageBucket: 'bloodthirsty-website.appspot.com',
      messagingSenderId: '896740932493',
      appId: '1:896740932493:web:6a1cb496a2c39f7e'
    };
    const app = firebase.initializeApp(config);
    const base = Rebase.createClass(app.database());
    base.syncState('/people', {
      context: this,
      state: 'workoutLog'
    });
    base.syncState('/wolt', {
      context: this,
      state: 'wolt'
    });
    base.syncState('/exercises', {
      context: this,
      state: 'exercises'
    });
    base.syncState('/people', {
      context: this,
      state: 'roster'
    });
  }

  addExercise = exercise => {
    const arr = this.state.exercises;
    arr.push(exercise);
    this.setState({
      exercises: arr
    });
  };

  addLog = newData => {
    this.setState({
      wolt: newData
    });
  };

  render() {
    console.log('ohhhh');
    console.log(this.state.wolt);
    const woltProps = {
      data: this.state.wolt
    };
    const rosterProps = {
      roster: this.state.roster
    };
    const playerProps = {
      data: this.state.wolt,
      addLog: this.addLog,
      exercises: this.state.exercises,
      addExercise: this.addExercise
    };

    if (Object.keys(woltProps.data).length !== 0 && playerProps.data) {
      return (
        <BrowserRouter>
          <div>
            <Div> Bloodthirsty Website</Div>
            <Menu />
            <Switch>
              <Route
                path="/roster"
                render={props => <Roster {...rosterProps} {...props} />}
              />
              <Route
                path="/workout"
                render={props => <Wolt {...props} {...woltProps} />}
              />
              <Route
                path="/player/:name"
                render={props => <PlayerData {...props} {...playerProps} />}
              />
            </Switch>
          </div>
        </BrowserRouter>
      );
    } else {
      return null;
    }
  }
}

export default App;
