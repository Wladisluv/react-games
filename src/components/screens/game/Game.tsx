import { Grid } from "@mui/material";
import Sidebar from "../../layout/sidebar/Sidebar";
import styles from "./Game.module.scss";
import GameGallery from "./game-gallery/GameGallery";
import { IGame } from "../../../Types/game.interface";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCurrentGame } from "../../../services/rawgApi";
import { Link } from "react-router-dom";

const Game = () => {
  const { id = '' } = useParams<{ id: string }>();
  const [game, setGame] = useState<IGame | null>(null);

  // Фетчим данные при монтировании компонента
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCurrentGame( id );
        setGame(response);
      } catch (error) {
        console.error('Error fetching game data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!game) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles["game-wrapper"]}>
      <Sidebar />

      <div className={styles["game-right"]}>
        <p className={styles.game__crumbs}>
        <Link to='/'>Home</Link> / <Link to='/'>Games</Link> / <span>{game?.name}</span>
        </p>

        <div className={styles['game-info']}>
            <div className={styles['game-info-about']}>
                <h1>{game?.name}</h1>

                <div>

                    <div className={styles['game-info-about__descr']}>
                    <h3>About</h3>
                    <p>
                    {game?.description_raw}
                    </p>
                    </div>
                </div>
            </div>

          <div>
            <GameGallery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
