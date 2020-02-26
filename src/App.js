import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox} from "./components/searchBox/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchFiled : ''
    };
  }

  handleChange = (e) => {
    this.setState({searchFiled : e.target.value});
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(
        response => response.json(),
        error => console.log(error)
      )
      .then(users => this.setState({ monster: users }));
  }

  render() {
    const {monster, searchFiled} = this.state;
    const filteredMonsters = monster.filter(m => {
      return m.name.toLowerCase().includes(searchFiled.toLowerCase());
    });


    return (
      <div className="App">
        <h1> MONSTERS ROLODEX </h1>
        <SearchBox placeholder='search monster' handleChange = {this.handleChange} />
        <CardList monster={filteredMonsters} /> 
      </div>
    );
  }
}

export default App;
