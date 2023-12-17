import { Grid } from "@mui/material";
import styles from "./GamesGrid.module.scss";
import { IGame } from "../../../Types/game.interface";
import GameCard from "../../screens/games/game-card/GameCard";
import { IUserGame } from "../../../stores/games-store";

interface Props {
  games: (IGame | IUserGame)[];
}

const GamesGrid = ({ games }: Props) => {
  if (!games) {
    return null;
  }

  return (
    <>
      <Grid className={styles["games-grid"]} container spacing={2}>
        {games?.map((game, index) => (
          <Grid
            item
            justifyContent="space-between"
            xs={8}
            md={4}
            lg={3}
            xl={3}
            key={`${game.id}-${index}`}
          >
            <GameCard
              item={("game" in game ? game.game : game) as IGame}
              id={game.id}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GamesGrid;
