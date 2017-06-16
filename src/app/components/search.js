import React from 'react';
import { connect } from 'react-redux';

import { List } from './list.js';
import { loadCharacters } from "../actions/characters.actions";

class Search extends React.Component {
  searchApi(event){
    if (event.target.value.length>=3) {
      fetch(`https://swapi.co/api/people/?search=${event.target.value}`)
        .then(response => response.json())
        .then(response => {
          console.log(this.props.characters.characters);
          this.props.loadCharacters(response.results);
      });
    }
  }

  render(){

    return(
      <div>
        <div className="form-group">
           <input type="text" className="form-control" placeholder="Search..." onChange={this.searchApi.bind(this)}/>
        </div>
        <div>
          <List></List>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadCharacters: (characters) => {
            dispatch(loadCharacters(characters));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);