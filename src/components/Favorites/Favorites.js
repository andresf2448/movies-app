import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions/index.js";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */
          this.props.movies && this.props.movies.map(movie => (
            <li key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>
              <h5>{movie.Title}</h5>
              </Link>
              <button onClick={() => this.props.removeMovieFavorite(movie.imdbID)}>✘</button>
            </li>
           ))
           }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: idMovie => dispatch(removeMovieFavorite(idMovie)),
    
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
