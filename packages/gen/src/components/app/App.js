import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import styles from './App.scss';
import { routes } from 'routes/routes';

import menuItems from './menuItems';


// PROJECT COMPONENTS
import Header from 'shared/components/header/Header';
import Footer from 'shared/components/footer/Footer';
import PrivateRoute from 'shared/components/auth/private-route/PrivateRoute';

const { HOME, PROFILE, AUTH } = routes;

const App = () => {
  // const isCordova = Boolean(window.cordova);
  // const Router = isCordova ? HashRouter : BrowserRouter;

  // conditional to determine how to present the menu
  let isMobile = window.matchMedia('(max-width: 600px)').matches;

  return (
    <Router>
      <div className={styles.App}>
        { !isMobile && menuItems
          ? <Header isMobile={isMobile} menuItems={menuItems}/>
          : <Header isMobile={isMobile} />
        }
        <main>
          <Switch>
            
            <PrivateRoute
              path={PROFILE.path}
              component={PROFILE.component}
            />
            <Route path={AUTH.path} component={AUTH.component} />
            <Route path={PROFILE.path} component={PROFILE.component} />
            <Route path={HOME.path} component={HOME.component} />
            <Redirect to={HOME.path} />
          </Switch>
        </main>
        { isMobile && <Footer buttons={menuItems} /> }
      </div>
    </Router>
  );
};

export default App;
