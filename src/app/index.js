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
      <div>
        <div>
          Search
        </div>
        <div>
          Result List
            <div>
              Result Item
                <div>
                  Rate Movie
                </div>
            </div>
        </div>
        <div>
          Result Details
        </div>
        
        <div>
          Ranking
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));