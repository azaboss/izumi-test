import {useEffect, useState} from 'react';
import axios from 'axios';

const API_URL = 'https://graphql.anilist.co'
const query = `query ( $page: Int, $perPage: Int, $search: String) {
    Page (page: $page, perPage:$perPage ) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (search: $search) {
        id
        title {
          native
          english
        }
        coverImage {
          extraLarge
        }
      }
    }
  }
  `;

const useFetch = (search, page, variables, setPage) => {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState(false)
  const fetchData = async (isLoadMore = false) => {
    if(!search) {
      setAnimeList([]);
      setIsDisabled(false);
      return;
    }
    setIsLoading(true);
    setTimeout(async () => {
        try {
          if(search === 'error') {
            throw {message:'Вызванная ошибка'}
            return
          }
          const {
            data: {data},
          } = await axios.post(API_URL, {
            query,
            variables,
          });
          const {media, pageInfo} = data.Page;
          if(!isLoadMore) {
            setAnimeList(media);
            setPage(1);
          }
          if(isLoadMore) {
            setAnimeList([...animeList, ...media]);
          }
          if(!pageInfo.hasNextPage) {
            setIsDisabled(true);
          }
        } catch (e) {
            setError(e.message)
        } finally {
          setIsLoading(false);
        }
      }
      , 1000,
    )
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData();
    }, 350);
    return () => clearTimeout(timeout);
  }, [search]);

  useEffect(() => {
    if(page > 1) {
      fetchData(true);
    }
  }, [page]);

  return {animeList, isLoading, isDisabled, error, setError};
};

export default useFetch