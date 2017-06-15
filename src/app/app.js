import React from 'react';

import Search from './components/search';
import { Details } from './components/details';
import { Results } from './components/results';

export class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-md-2 search">
          <Search characters={this.props.characters}></Search>
        </div>
        <div className="col-md-10">
          <Results characters={this.props.characters}></Results>
          <Details></Details>
        </div>
      </div>
    );
  }
}
