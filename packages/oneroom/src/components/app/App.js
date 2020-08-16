import React from 'react';
import { app } from 'packageRoot/app.config';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import menuItems from './menuItems';

import styles from './App.scss';
import { ABOUT, LESSONS, BLOG, CONTACT, HOME } from 'routes/routes';
import Header from 'components/header/Header';
// import Footer from 'shared/components/footer/Footer';




const App = () => {
  // const isCordova = Boolean(window.cordova);
  // const Router = isCordova ? HashRouter : BrowserRouter;

  // conditional to determine how to present the menu

  return (
    <Router>
      <div className={styles.App}>
        <Header title={app.title} menuItems={menuItems}></Header>
        <main>
          <p>Its the one room art house!</p>
          <Switch>

            <Route path={ABOUT.path} component={ABOUT.component} />
            <Route path={LESSONS.path} component={LESSONS.component} />
            <Route path={BLOG.path} component={BLOG.component} />
            <Route path={CONTACT.path} component={CONTACT.component} />

            <Redirect to={HOME.path} />

          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
