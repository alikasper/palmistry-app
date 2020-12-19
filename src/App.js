import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Fate from './components/Fate';
import Head from './components/Head';
import Heart from './components/Heart';
import Life from './components/Life';
import Sources from './components/Sources';

import HomeIcon from './components/images/home-icon.png';

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/"><img src={HomeIcon} alt="home button" /></Link>
        <div className="navs">
          <Link to="/life">LIFE</Link>
          <Link to="/heart">HEART</Link>
          <Link to="/head">HEAD</Link>
          <Link to="/fate">FATE</Link>
        </div>
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/fate" component={Fate} />
          <Route exact path="/head" component={Head} />
          <Route exact path="/heart" component={Heart} />
          <Route exact path="/life" component={Life} />
          <Route exact path="/sources" component={Sources} />
        </Switch>
      </main>

      <footer>
        <div className="sources">
          <Link to="/sources">SOURCES</Link>
        </div>
      </footer>

    </div>
  );
}

export default App;
