import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index.js';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount(){
        const movieID = this.props.match.params.id;
        this.props.getMovieDetail(movieID)
    }

    render() {
        return (
            <div className="movie-detail">
              {
                this.props.loading ? <h2>CARGANDO</h2>:
                <div>
                <h2>Detalle de la pelicula</h2>
                <h1>{this.props.movie.Title}</h1>
                <h4>{this.props.movie.Year}</h4>
                <img src={this.props.movie.Poster}></img>
                <h4>Director: {this.props.movie.Director}</h4>
                <h4>Actors: {this.props.movie.Actors}</h4>
                <p>{this.props.movie.Plot}</p>
                <h5>Awards: {this.props.movie.Awards}</h5>
                </div>
                }
            </div>
            );
        }
}

function mapStateToProps(state) {
    return {
      movie: state.movieDetail,
      loading: state.loading
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: idMovie => dispatch(getMovieDetail(idMovie)),
    };
  }


export default connect(mapStateToProps, mapDispatchToProps)(Movie);