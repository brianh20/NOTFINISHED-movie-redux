import React from 'react';
import { List } from './list.js';

export class Search extends React.Component {
  render(){
    return(
      <div>
        <div className="form-group">
           <input type="text" className="form-control" placeholder="Search..."/>
        </div>
        <div>
          <List></List>
        </div>
      </div>
    );
  }
}