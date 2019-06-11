import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Heroes from './components/Heroes.jsx'
import Navbar from './components/Navbar.jsx'
import Detail from './components/Detail.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" component={Heroes} exact/>
        <Route path="/heroes/:heroeID" component={Detail}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
