import React from 'react';
import './App.css';

// API LINK
// https://search.sny.tv/sitesearch/_search?q=hello&sort=userDate:desc&size=10000&size=50&from=0

class App extends React.Component {
  state = {
    hits: [],
    query: ''
  }

  handleChange = e => {
    this.setState({
      query: e.target.value
    }, () => {
      this.fetchData();
    })
  }

  fetchData = async () => {
    const response = await fetch(`https://search.sny.tv/sitesearch/_search?q=${this.state.query}&sort=userDate:desc&size=10000&size=50&from=0`);
    const data = await response.json();
    console.warn(data, "RESPONSE DATA");
    console.warn('query', this.state.query)
  }
  
  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
