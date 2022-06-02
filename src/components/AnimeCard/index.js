import {Box, Card, CardContent, CardMedia, IconButton, Typography} from '@mui/material';
import styles from './animecard.module.scss'

import FavoriteIcon from '@mui/icons-material/Favorite';
import {useAnimeListContext} from '../../hooks/useAnimeListContext';

const AnimeCard = ({title, coverImage,anime,}) => {
  const {handleAddToFavourite, favAnimeList} = useAnimeListContext()
  const isActive = favAnimeList.filter(item=>item.id===anime.id).length
  return (
    <Card sx={{maxWidth: 375, height: '100%'}}>
      <CardMedia
        component="img"
        height="179"
        image={coverImage.extraLarge}
        alt={title.native}
        className={styles.img}
      />
      <CardContent>
        <Box textAlign="center" className={styles.textContent}>
          <Typography component="h3">{title.english}</Typography>
          <Typography>{title.native}</Typography>
        </Box>
        <Box textAlign="right">
          <IconButton onClick={()=>handleAddToFavourite(anime)}>
            <FavoriteIcon className={isActive ? styles.active : ''}/>
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};
export default AnimeCard