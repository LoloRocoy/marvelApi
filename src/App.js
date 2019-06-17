import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Heroes from './components/heroes/Heroes'
import HeroeDetail from './components/heroes/HeroeDetail'
import Comics from './components/comics/Comics'
import ComicDetail from './components/comics/ComicDetail'
import Events from './components/events/Events'
import EventDetail from './components/events/EventDetail'
import Stories from './components/stories/Stories'
import StorieDetail from './components/stories/StorieDetail'
import Series from './components/series/Series'
import SerieDetail from './components/series/SerieDetail'
import Landing from './components/Landing'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" component={Landing} exact/>
        <Route path="/heroes" component={Heroes} exact/>
        <Route path="/heroes/:heroeID" component={HeroeDetail}/>
        <Route path="/comics" component={Comics} exact/>
        <Route path="/comics/:comicID" component={ComicDetail} exact/>
        <Route path="/events" component={Events} exact/>
        <Route path="/events/:eventID" component={EventDetail} exact/>
        <Route path="/stories" component={Stories} exact/>
        <Route path="/stories/:storieID" component={StorieDetail} exact/>
        <Route path="/series" component={Series} exact/>
        <Route path="/series/:serieID" component={SerieDetail} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
