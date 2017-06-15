import React from 'react';
import { List } from './list.js';

export class Search extends React.Component {
  searchApi(event){
    if (event.target.value.length>=3) {
      fetch(`https://swapi.co/api/people/?search=${event.target.value}`)
        .then(d => d.json())
        .then(d => {
          console.log(d.results);
      });
    }
  }

  render(){
    return(
      <div>
        <div className="form-group">
           <input type="text" className="form-control" placeholder="Search..." onChange={this.searchApi}/>
        </div>
        <div>
          <List></List>
        </div>
      </div>
    );
  }
}