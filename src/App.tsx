import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import { GamesApiResponse } from './Types/game.interface';
import Game from './components/screens/game/Game';
import GamesList from './components/screens/games/GamesList';
import { useFetch } from './hooks/useFetch';
import { getGames } from './services/rawgApi';
import NotFound from './components/screens/not-found/NotFound';
import User from './components/screens/user/User';

const App = () => {
  const { data } = useFetch<GamesApiResponse, null>(getGames);
  
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path='/' element={<GamesList games={data?.results}/>} />
        <Route path='/game' element={<Game />} />
        <Route path='/user' element={<User />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App