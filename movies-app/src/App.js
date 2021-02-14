import React, { Component } from 'react';
import { Header } from './components';
import Movies from './features/movies';
import apiMovie, { apiMovieMap }  from './conf/api.movie';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false
    }
  }  

  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index
    })
  }

  componentDidMount() {
    apiMovie.get('/discover/movie')
            .then( response => response.data.results )
            .then( moviesApi => {
              const movies = moviesApi.map(apiMovieMap)
              this.updateMovies(movies);
            })
            .catch( err => console.log(err));
  }

  updateMovies = (movies) => {
    this.setState({
      movies,
      loaded: true
    })
  }

  render(){
    return (
      <div className="App d-flex flex-column">
        <Header />  
        <Movies 
          loaded={ this.state.loaded }
          updateMovies={ this.updateMovies }
          updateSelectedMovie={ this.updateSelectedMovie }
          movies= { this.state.movies }
          selectedMovie={ this.state.selectedMovie }
        />     
      </div>
    );
  }
}

export default App;