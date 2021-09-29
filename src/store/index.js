import { createStore } from 'vuex';
import axios from '@/axios';

export default createStore({
  state() {
    return {
      movies: [],
      topMovies: [],
    };
  },
  mutations: {
    // Adding the searched-for movies to State
    setMovies(state, payload) {
      state.movies = payload;
    },
    // Adding the top 100 movies to State
    setTopMovies(state, payload) {
      state.topMovies = payload;
    },
  },
  actions: {
    // Fetching the searched-for movies from the database using Axios
    // Only fetches the first 20 movies with the query used
    async getResults(context, payload) {
      const response = await axios.get(`search/movie?api_key=4a36ba11e517598c5ea1ae65b27ac886&language=en-US&query=${payload}`);
      context.commit('setMovies', response.data.results);
    },
    async loadTopMovies(context) {
      // Get requests to fetch 100 Top-Rated Movies from TMDB using Axios --
      // since each call only gives 20 movies, we make 5 calls
      const res1 = await axios.get('movie/top_rated?api_key=4a36ba11e517598c5ea1ae65b27ac886&language=en-US&page=1');
      const res2 = await axios.get('movie/top_rated?api_key=4a36ba11e517598c5ea1ae65b27ac886&language=en-US&page=2');
      const res3 = await axios.get('movie/top_rated?api_key=4a36ba11e517598c5ea1ae65b27ac886&language=en-US&page=3');
      const res4 = await axios.get('movie/top_rated?api_key=4a36ba11e517598c5ea1ae65b27ac886&language=en-US&page=4');
      const res5 = await axios.get('movie/top_rated?api_key=4a36ba11e517598c5ea1ae65b27ac886&language=en-US&page=5');
      // We merge the results from the get requests before forwarding the data to State
      const topMovies = [...res1.data.results, ...res2.data.results, ...res3.data.results, ...res4.data.results, ...res5.data.results];
      context.commit('setTopMovies', topMovies);
    },
  },
  getters: {
    movies(state) {
      return state.movies;
    },
    topMovies(state) {
      return state.topMovies;
    },
  },
});
