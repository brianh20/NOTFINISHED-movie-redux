import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import { changeUser } from "./actions/user.actions";

import store from "./store.js";

import { Search } from './components/search';
import { Details } from './components/details';
import { Results } from './components/results';

import less from './styles/styles.less'; // eslint-disable-line

class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-md-2 search">
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

const mapStateToProps = (state) => {
    return {
        user: state.user,
        characters: state.characters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeUser: (name) => {
            dispatch(changeUser(name));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  window.document.getElementById("app")
);