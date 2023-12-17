import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Game from "./components/screens/game/Game";
import GamesList from "./components/screens/games/GamesList";
import NotFound from "./components/screens/not-found/NotFound";
import User from "./components/screens/user/User";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/" element={<GamesList />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/user" element={<User />} />
        <Route path="/wishlist" element={<User />} />
        <Route path="/cart" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
