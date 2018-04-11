// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './Componentes/App';
import About from './Componentes/About';
import Contact from './Componentes/Contact';
import Home from './Componentes/Home';
import Search from './Componentes/Search_Job';


const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
    </Switch>
  </App>;

export default AppRoutes;
