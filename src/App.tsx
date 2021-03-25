import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import useList from './hooks/useList';
import Character from './pages/Character';
import Main from './pages/Main';

function App() {
  const { list, status, initialFetch } = useList();

  useEffect(() => {
    initialFetch(list.page)
  },[])

  if(status === 'pending'){
    return <div>loading...</div>
  }

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
