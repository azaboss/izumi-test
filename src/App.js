import {useState} from 'react';
import useFetch from './hooks/useFetch'
import Layout from './components/Layout';
import Container from '@mui/material/Container';
import Input from './components/Input';
import {Box, IconButton} from '@mui/material';
import AnimeListProvider from './hooks/useAnimeListContext';
import ListWrapper from './components/ListWrapper';
import listWrapperStyles from './components/ListWrapper/listwrapper.module.scss'
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

export default function App() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const variables = {
    page,
    perPage: 3,
    search,
  };
  const {animeList, isLoading, isDisabled, error, setError} = useFetch(
    search,
    page,
    variables,
    setPage,
  );
  const handleClose = (event, reason) => {
    if(reason === 'clickaway') {
      return;
    }
    setError(false);
  };
  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small"/>
    </IconButton>
  );

  const handleLoadMore = () => setPage(page + 1);
  const hanldeSearchChange = async (e) => setSearch(e.target.value);

  return (
    <Layout>
      <Container maxWidth="lg">
        <h2 className={listWrapperStyles.title}>
          Список аниме
        </h2>
        <Box maxWidth={600} margin="auto" mb={3}>
          <Input value={search} onChange={hanldeSearchChange}/>
        </Box>
        <AnimeListProvider>
          <ListWrapper animeList={animeList} isLoading={isLoading} handleLoadMore={handleLoadMore}
                       isDisabled={!isDisabled}/>
        </AnimeListProvider>
      </Container>
      <Snackbar
        open={Boolean(error)}
        autoHideDuration={6000}
        onClose={handleClose}
        message={error}
        action={action}
      />
    </Layout>
  );
}



