import React,{Component} from 'react';
import { CardList } from './components/card-list/card-list.components';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField:''
    };
  

  this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange(e) {
    this.setState({searchField: e.target.value});
  };

  render() {
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1><center> Monsters Rolodex </center></h1>
       <center> <SearchBox placeholder='search monsters' handleChange={this.handleChange} /> </center>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
