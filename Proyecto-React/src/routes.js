// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './Componentes/App';
import Acerca_de from './Componentes/Acerca';
import Home from './Componentes/Home';
const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Acerca_de" component={Acerca_de} />
    </Switch>
  </App>;

export default AppRoutes;
