import React from 'react';
import './App.css';

// API LINK
// https://search.sny.tv/sitesearch/_search?q=hello&sort=userDate:desc&size=10000&size=50&from=0

class App extends React.Component {
  state = {
    hits: [],
    queries: [],
    isFetching: false
  }

  handleChange = e => {
    if (e.target.value) {
      this.setState({
        queries: [...this.state.queries, e.target.value],
        // isFetching: true,
      }, () => {
        if( this.state.queries.length && ! this.state.isFetching ) {
          this.setState({
            isFetching: true
          }, () => {
            const queries = [...this.state.queries];
            this.sendQueries(queries);
          })
        }
        })
    } else {
      this.setState({
        hits: [],
        queries: [],
        isFetching: false
      })
    }
  } 

  sendQueries = (queries) => {
    if ( queries.length === 0 ) {
      return;
    }
    const query = queries.shift();
    this.setState({
      queries,
    }, () => {
      this.fetchData(query);
    })

    return this.sendQueries(queries);
  }

  fetchData = async (query) => {
    const response = await fetch(`https://search.sny.tv/sitesearch/_search?q=${query}&sort=userDate:desc&size=10000&size=50&from=0`);
    const data = await response.json();
    console.log( data.hits.total)
    this.setState({
      isFetching: false,
      hits: data.hits.total ? data.hits.hits : [] 
    });
  }
  
  render() {
    const { hits } = this.state;
    
    return (
      <div className="App">
        <input type="text" onChange={this.handleChange}/>
        {
          hits && hits.map( hit => (
            <p dangerouslySetInnerHTML={ { __html: hit._source.body } }></p>
          ))
        }
      </div>
    );
  }
}

export default App;
