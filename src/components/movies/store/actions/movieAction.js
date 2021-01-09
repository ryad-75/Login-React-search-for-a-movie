import { FETCH_MOVIE_PENDING, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR } from './type'


const fetchMoviePendig = () => ({
    type: FETCH_MOVIE_PENDING
})

const fetchMovieSuccess = json => ({
    type: FETCH_MOVIE_SUCCESS,
    payload: json
})

const fetchMovieError = error => ({
    type: FETCH_MOVIE_ERROR,
    payload: error
})

export const fetchMovie = (name) => {
    return async dispatch => {
        dispatch(fetchMoviePendig())
        try {
            const url = `https://www.omdbapi.com/?s=${name}&apikey=9adfe91f`
            const response = await fetch(url)
            const result = await response.json(response)

            // console.log(result.Search)
            dispatch(fetchMovieSuccess(result.Search))
        } catch (error) {
            dispatch(fetchMovieError(error))
        }
    }
}