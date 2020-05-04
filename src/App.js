import React, { useEffect } from 'react';
import Nav from './components/Nav'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { getProjects } from './actions/projects';
import {Route, Switch} from 'react-router-dom'
import Projects from './components/Projects';
import { Home } from './components/Home';
import LiveDemo from './components/livedemo'



function App({getProjects}) {

      useEffect(() => {
        getProjects()
        return () => getProjects()
      }, [getProjects]);


  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        <Route exact path='/liveDemo/:pid'>
          <LiveDemo />
        </Route>
      </Switch>
    </div>
  );
}

App.propTypes = {
  getProjects: PropTypes.func.isRequired,
}

export default connect(null, {getProjects})(App);
