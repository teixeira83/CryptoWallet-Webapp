import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar, MobileFooter } from './components';
import routes from './config/routes';
import './App.css';

const App: React.FC = () => (
  <Router>
    <CssBaseline />
    <NavBar />
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          exact={route.exact}
          render={() => (
            <route.component
              name={route.name}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          )}
        />
      ))}
    </Switch>
    <MobileFooter />
  </Router>
);

export default App;
