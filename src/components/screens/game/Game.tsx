import { Grid } from "@mui/material";
import Sidebar from "../../layout/sidebar/Sidebar";
import styles from "./Game.module.scss";
import GameCard from "../games/game-card/GameCard";
import GameGallery from "./game-gallery/GameGallery";

const Game = () => {
  return (
    <div className={styles["game-wrapper"]}>
      <Sidebar />

      <div className={styles["game-right"]}>
        <a className={styles.game__crumbs} href="/">
          <span>Home</span> / <span>Games</span> / Alan Wake 2
        </a>

        <div className={styles['game-info']}>
            <div className={styles['game-info-about']}>
                <h1>Alan Wake 2</h1>

                <div>

                    <div className={styles['game-info-about__descr']}>
                    <h3>About</h3>
                    <p>
                    Alan Wake 2 is a survival horror game with an intense atmosphere and a 
                    twisted, layered, psychological story - it is the long awaited sequel to 
                    Remedy Entertainment's award-winning 2010 psychological thriller, 
                    Alan Wake, and 2021's Alan Wake Remastered.
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
