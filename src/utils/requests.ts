const API_KEY = process.env.API_KEY;

const requests: { title: string; url: string; link: string }[] = [
  {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    link: 'fetchTrending',
  },
  {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    link: 'fetchTopRated',
  },
  {
    title: 'Action',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    link: 'fetchActionMovies',
  },
  {
    title: 'Comedy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    link: 'fetchComedyMovies',
  },
  {
    title: 'Horror',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    link: 'fetchHorrorMovies',
  },
  {
    title: 'Romance',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    link: 'fetchRomanceMovies',
  },
  {
    title: 'Mystery',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    link: 'fetchMystery',
  },
  {
    title: 'Sci-Fi',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    link: 'fetchSciFi',
  },
  {
    title: 'Western',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    link: 'fetchWestern',
  },
  {
    title: 'Animation',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    link: 'fetchAnimation',
  },
  {
    title: 'TV Movie',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    link: 'fetchTV',
  },
];

export default requests;
