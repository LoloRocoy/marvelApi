import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Heroes from './components/layouts/Heroes.jsx'
import Navbar from './components/Navbar.jsx'
import HeroeDetail from './components/details/HeroeDetail.jsx'
import Comics from './components/layouts/Comics.jsx'
import ComicDetail from './components/details/ComicDetail.jsx'
import Events from './components/layouts/Events.jsx'
import EventDetail from './components/details/EventDetail.jsx'
import Stories from './components/layouts/Stories'
import StorieDetail from './components/details/StorieDetail.jsx'
import Series from './components/layouts/Series'
import SerieDetail from './components/details/SerieDetail.jsx'
import Landing from './components/layouts/Landing.jsx'

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
