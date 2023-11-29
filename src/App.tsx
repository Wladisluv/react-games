import styles from './App.module.scss';
import Game from './components/screens/game/Game';
import GamesList from './components/screens/games/GamesList';

const App = () => {
  return (
    <div className={styles.wrapper}>
      {/* <GamesList /> */}
      <Game />
    </div>
  )
}

export default App