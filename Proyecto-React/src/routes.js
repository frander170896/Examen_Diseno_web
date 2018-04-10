// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './Componentes/App';
import About from './Componentes/About';
import Contact from './Componentes/Contact';
import Home from './Componentes/Home';


const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/" component={Home} />
    </Switch>
  </App>;

export default AppRoutes;
