import styles from './App.module.scss';
import { GamesApiResponse } from './Types/game.interface';
import Game from './components/screens/game/Game';
import GamesList from './components/screens/games/GamesList';
import { useFetch } from './hooks/useFetch';
import { getGames } from './services/rawgApi';

const App = () => {
  const { data, error } = useFetch<GamesApiResponse, null>(getGames);
  console.log("Data:", data?.results);
  
  return (
    <div className={styles.wrapper}>
      <GamesList games={data?.results} />
      {/* <Game /> */}
    </div>
  )
}

export default App