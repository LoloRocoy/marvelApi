import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Heroes from './components/Heroes'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Heroes}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
