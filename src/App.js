import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Heroes from './components/Heroes.jsx'
import Navbar from './components/Navbar.jsx'
import HeroeDetail from './components/HeroeDetail.jsx'
import Comics from './components/Comics.jsx'
import ComicDetail from './components/ComicDetail'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" component={Heroes} exact/>
        <Route path="/heroes/:heroeID" component={HeroeDetail}/>
        <Route path="/comics" component={Comics} exact/>
        <Route path="/comics/:comicID" component={ComicDetail}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
