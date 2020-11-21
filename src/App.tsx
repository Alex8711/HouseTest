import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/shared/Header'
import Communities from './components/Communities/Communities'
import NotFound from './components/shared/NotFound'

const App = () =>
{
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Communities} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}

export default App;