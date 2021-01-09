import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchMovie } from './store/actions/movieAction'
import Input from './components/Input';
import Card from './components/Card';
import Loader from './components/Loader';
import "../Loginstyle.css";

class Movies extends Component {

  state = {
    searchInput: 'The Rain'
  }

  componentDidMount() {
    this.props.getMovieList(this.state.searchInput)
  }

  _getMovie = () => {
    this.props.getMovieList(this.state.searchInput)
  }

  _onChangeHandler = (e) => {
    this.setState({
      searchInput: e.target.value
    })
    console.log(this.state.searchInput)
  }
  render() {
    const { data, loading } = this.props.movies
    return (
      <div className="center">
        <div>
          <h2 className="center darkslategray-text">Movie Search</h2>
        </div>

        <div className="container">
          <div className="container-movies">
          <Input
            value={this.state.searchInput}
            onChange={this._onChangeHandler}
            onClick={this._getMovie}
          />
          <div className="row">
            {
              loading ? <Loader /> :
                data.map(item => (
                  <Card
                    key={item.imdbID}
                    image={item.Poster}
                    name={item.Title}
                    year={item.Year}
                  />
                ))
            }
          </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMovieList: (name) => dispatch(fetchMovie(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);