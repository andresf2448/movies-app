import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from 'react-router-dom';
import { addMovieFavorite, getMovies } from '../../actions/index.js';
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */
         this.props.movies && this.props.movies.map(movie => (
          <li key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>
              <h5>{movie.Title}</h5>
              <img src={movie.Poster}></img>
            </Link>
            <button onClick={() => this.props.addMovieFavorite({imdbID: movie.imdbID, Title: movie.Title, Year: movie.Year, Poster: movie.Poster})}>⭐Agregar a Favoritos</button>
          </li>
         ))
         }
        </ul>
      </div>
    );
  }
}

// Me llega por ahora un Prop{movies: store.getState().moviesLoaded}
function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

//export default Buscador;

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
  