import AnimeCard from '../AnimeCard';
import styles from './animelist.module.scss'

const AnimeList = ({animeList = []}) => {
  return (
    <div className={styles.list}>
      {animeList.map((anime) => (
        <AnimeCard key={anime.id} {...anime} anime={anime}/>
      ))}
    </div>
  );
};

export default AnimeList