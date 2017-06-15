import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header"
import { Home } from "./components/Home"

import Request from 'superagent';

class App extends React.Component {
  constructor(){
    super();
      var url = `https://s3.amazonaws.com/technical-challenge/Contacts_v2.json`;
      Request.get(url).then((response) => {
        console.log(response.body);
      });
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