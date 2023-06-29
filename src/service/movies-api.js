const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '2f61037bdb9e62df1bd8468d022a59e6';

export async function getDayTrendingMovies() {
  const response = await fetch(`${BASE_URL}trending/movie/day?api=${API_KEY}`);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Smth went wrong...`);
  }
}

export async function getSerchMovie({ query }) {
  const response = await fetch(
    `${BASE_URL}serch/movie?api_key=${API_KEY}&query=${query}`
  );
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Smth went wrong...`);
  }
}

export async function getMovieDetails(movieId) {
  const response = await fetch(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
  );
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Smth went wrong...`);
  }
}
export async function getMovieCast(movieId) {
  const response = await fetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  );
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Smth went wrong...`);
  }
}
export async function getMovieReviews(movieId) {
  const response = await fetch(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Smth went wrong...`);
  }
}
