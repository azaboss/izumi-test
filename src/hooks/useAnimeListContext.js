import React, {createContext, useContext, useState} from 'react';

const AnimeListContext = createContext(null)

const AnimeListProvider = ({children}) => {
  const [favAnimeList, setFavAnimeList] = useState([])
  const handleAddToFavourite = (anime) => {
    const isAnimeInFavs = favAnimeList.find(item => item.id === anime.id)
    if(isAnimeInFavs) {
      const newFavList = favAnimeList.filter(item => item.id !== anime.id)
      setFavAnimeList(newFavList)
    } else {
      setFavAnimeList([...favAnimeList, anime])
    }
  }
  return <AnimeListContext.Provider value={{favAnimeList, handleAddToFavourite}}>
    {children}
  </AnimeListContext.Provider>
}

export const useAnimeListContext = ()=>useContext(AnimeListContext)

export default AnimeListProvider;