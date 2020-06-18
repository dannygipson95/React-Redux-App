import React from 'react';
import logo from './logo.svg';
import './App.css';

import GlobalDiv from './styledComponents/global'
import MonsterForm from './components/monsterForm'
import MonsterList from './components/monsterList'
import MonsterCard from './components/monsterCard'

import {Route, Link, Switch} from 'react-router-dom'

function App() {
  return (
    <GlobalDiv>
    <Link to='/'>Home</Link>
    <Switch>
      <Route exact path='/'>
        <MonsterForm/>
        <MonsterList/>
      </Route>
      <Route path=':monsterName'>
        <MonsterCard/>
      </Route>
    </Switch>
    </GlobalDiv>
  );
}

export default App;
