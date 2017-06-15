import React from "react";
import { render } from "react-dom";

import Request from 'superagent';

class App extends React.Component {
  constructor(){
    super();
    // fetch('https://s3.amazonaws.com/technical-challenge/Contacts_v2.json')
    //   .then(d => d.json())
    //   .then(d => {
    //     console.log(d);
    //   });
  }

  render() {

    return (
      <div className="container">
        This is my starting point! 
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));