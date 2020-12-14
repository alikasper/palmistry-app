import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Fate from './components/Fate';
import Head from './components/Head';
import Heart from './components/Heart';
import Life from './components/Life';
import Sources from './components/Sources';

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
        <div className="navs">
          <Link to="/fate">Fate</Link>
          <Link to="/head">Head</Link>
          <Link to="/heart">Heart</Link>
          <Link to="/life">Life</Link>
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
        <div>
          <Link to="/sources">Sources</Link>
        </div>
      </footer>

    </div>
  );
}

export default App;
