import {useAnimeListContext} from '../../hooks/useAnimeListContext';
import AnimeList from '../AnimeList';
import styles from './listwrapper.module.scss'
import RenderIf from '../RenderIf';
import {Box, Skeleton} from '@mui/material';
import listStyles from '../AnimeList/animelist.module.scss'
import CustomButton from '../Button';

const ListWrapper = ({animeList,isLoading,isDisabled,handleLoadMore}) => {
  const {favAnimeList} = useAnimeListContext()
  return <>
      <AnimeList animeList={animeList}/>
    <RenderIf isTrue={isLoading}>
      <Box className={listStyles.list} mt={2}>
        <Skeleton animation="wave" variant="rectangular" width={350} height={180} />
        <Skeleton animation="wave" variant="rectangular" width={350} height={180} />
        <Skeleton animation="wave" variant="rectangular" width={350} height={180} />
      </Box>
    </RenderIf>
    <RenderIf isTrue={animeList.length}>
      <Box textAlign='center' m={2}>
        <CustomButton disabled={!isDisabled} onClick={handleLoadMore}>MORE</CustomButton>
      </Box>
    </RenderIf>
    <RenderIf isTrue={favAnimeList.length}>
      <div>
        <h2 className={styles.title}>Любимое аниме</h2>
        <AnimeList animeList={favAnimeList}/>
      </div>
    </RenderIf>
  </>
}
export default ListWrapper