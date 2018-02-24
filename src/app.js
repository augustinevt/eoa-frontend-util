import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles.js';

import { containers as duckContainers } from './duck';
import { containers as algContainers } from './alg';
import createStore from './createStore';


const store = createStore();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Provider store={store}>
        <Router>
          <div>
            <Route key={`duck-route`} exact path={`/`} component={duckContainers.DuckContainer}/>
            <Route key={`algorithm-route`} exact path={`/alg`} component={algContainers.algContainer}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
