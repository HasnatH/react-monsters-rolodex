import React from 'react';
import './App.css';

// components
import {CardList} from './components/card-list/CardList'
import {Search} from './components/search/Search'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  handleChange = e => {
    this.setState({search: e.target.value});
  }

  render() {
    const {monsters, search} = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
