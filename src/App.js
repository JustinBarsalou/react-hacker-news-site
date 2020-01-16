import './App.css';
import Article from './components/article'

import React, {Component} from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
    posts:[],
    }
  }

  fetchData() {
    fetch('http://hn.algolia.com/api/v1/search?query=...')
    .then(response => response.json())
    .then(data => this.setState({posts: data.hits}));
    
  }

  componentDidMount() {
    this.fetchData()
  }
  
  
  render() {
    
    return (
      <div className="Main-App">
          {this.state.posts.map((posts) => (
            <div>
            <Article
            author={posts.author}
            date={posts.created_at}
            />
            </div>
          ))}
      </div>
      
      )
    }
  }

export default App;