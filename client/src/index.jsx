import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      url: 'http://127.0.0.1:1128/',
      type: 'POST',
      data: { user: term },
      success: (data) => {
        console.log('SUCCESS!');
        console.log('this is data:', data);
      },
      error: (err) => {
        console.log('ERROR:', err);
      }
    });

  }

  render () {
    return (<div id='main'>
      <h1>Github Fetcher</h1>
      <h2>SOMETHING!!! {JSON.stringify(this.state.repos)}</h2>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
