import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Character from './pages/Character';
import Main from './pages/Main';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/character/:id">
          <Character />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
