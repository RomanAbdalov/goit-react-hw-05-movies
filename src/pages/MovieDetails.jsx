import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Button, Section } from 'components/App/App.styled';
import { Item } from 'components/MoviesList/MoviesList.styled';
import { Text } from 'components/MoviesInfo/MoviesInfo.styled';
import { MoviesInfo } from 'components/MoviesInfo/MoviesInfo';

import { getMovieDetails } from 'service/movies-api';

export const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const goBackLink = location.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) {
      return;
    }
    setIsLoading(true);
    getMovieDetails(movieId)
      .then(response => {
        setMovieInfo(response);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <main>
      {isLoading && <Loader />}
      <Button>
        <Link to={goBackLink}>
          <AiOutlineArrowLeft />
          Go back
        </Link>
      </Button>
      {movieInfo && <MoviesInfo {...movieInfo} />}
      <Section>
        <Text>Additional information</Text>
        <ul>
          <Item>
            <Link to="cast">Cast</Link>
          </Item>
          <Item>
            <Link to="reviews">Reviews</Link>
          </Item>
        </ul>
      </Section>
      <Outlet />
      {error && <h2>{error}</h2>}
    </main>
  );
};
