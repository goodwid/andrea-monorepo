import React from 'react';
import { app } from 'packageRoot/app.config';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import styles from './App.scss';
import { routes } from 'routes/routes';



// const { HOME, PROFILE, AUTH } = routes;

const App = () => {
  // const isCordova = Boolean(window.cordova);
  // const Router = isCordova ? HashRouter : BrowserRouter;

  // conditional to determine how to present the menu

  return (
    <Router>
      <div className={styles.App}>
        <header>{app.title}</header>
        <main>
          <p>Its the one room art house!</p>
          {/* <Switch>

            <PrivateRoute
              path={PROFILE.path}
              component={PROFILE.component}
            />
            <Route path={AUTH.path} component={AUTH.component} />
            <Route path={PROFILE.path} component={PROFILE.component} />
            <Route path={HOME.path} component={HOME.component} />
            <Redirect to={HOME.path} />
          </Switch> */}
        </main>
      </div>
    </Router>
  );
};

export default App;
