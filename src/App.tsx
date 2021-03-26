import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import useList from './hooks/useList';
import Character from './pages/Character';
import Main from './pages/Main';
import AppLayout from './components/AppLayout';
import Loader from './components/Loader';

function App() {
  const { list, status, initialFetch } = useList();

  useEffect(() => {
    initialFetch(list.page)
  },[])

  return (
    <Router>
      <Switch>
        {status === 'pending' && <Loader global />}
        <AppLayout>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/character/:id">
            <Character />
          </Route>
        </AppLayout>
      </Switch>
    </Router>
  );
}

export default App;
