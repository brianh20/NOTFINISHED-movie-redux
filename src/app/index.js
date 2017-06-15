import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import {connect} from 'react-redux';

import store from "./store.js";

import { Search } from './components/search';
import { Details } from './components/details';
import { Results } from './components/results';

import less from './styles/styles.less'; // eslint-disable-line

class App extends React.Component {
  constructor(){
    super();
    // fetch('https://swapi.co/api/people/?search=r2')
    //   .then(d => d.json())
    //   .then(d => {
    //     console.log(d);
    //   });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-md-2">
          <Search></Search>
        </div>
        <div className="col-md-10">
          <Results></Results>
          <Details></Details>
        </div>
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  window.document.getElementById("app")
);