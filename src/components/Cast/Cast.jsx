import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Section } from 'components/App/App.styled';
import { Text } from 'components/MoviesInfo/MoviesInfo.styled';

import { getMovieCast } from 'service/movies-api';

export const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const defaultImg =
    'https://img.freepik.com/free-vector/cinema-concept_1284-12759.jpg?w=2000';

  useEffect(() => {
    if (!movieId) {
      return;
    }
    setIsLoading(true);
    getMovieCast(movieId)
      .then(response => {
        setCastInfo(response.cast);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);
  return (
    <Section>
      {isLoading && <Loader />}
      <ul>
        {castInfo?.map(({ id, character, name, profile_path }) => {
          return (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? 'https://image.tmdb.org/t/p/w500' + profile_path
                    : defaultImg
                }
                alt={name}
                width={100}
                loading="lazy"
                style={{ marginBottom: '20px' }}
              />
              <Text>{name}</Text>
              <Text>
                <i>Character: </i>
                {character}
              </Text>
            </li>
          );
        })}
      </ul>
      {castInfo.length === 0 && (
        <div>We don't have any cast for this movie.</div>
      )}
      {error && <h2>{error}</h2>}
    </Section>
  );
};
