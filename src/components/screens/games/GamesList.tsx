import Sidebar from "../../layout/sidebar/Sidebar";
import Field from "../../ui/field/Field";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./GamesList.module.scss";
import { Avatar, Grid, IconButton, LinearProgress } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GameCard from "./game-card/GameCard";
import { GamesApiResponse, IGame } from "../../../Types/game.interface";
import { useFetch } from "../../../hooks/useFetch";
import { getGames } from "../../../services/rawgApi";
import { useMemo, useRef, useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";

interface Props {
  games?: IGame[] | null;
}



const GamesList= ({ games }: Props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const { progress } = useFetch<GamesApiResponse, null>(getGames)

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const filteredGames = useMemo(() => {
    if (!games) return [];

    return games.filter(
      (game) =>
        game.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );
  }, [games, debouncedSearchQuery]);
  
  
  return (
    <div className={styles["games-list"]}>
      <LinearProgress className={progress === 0 ? styles['progress-hidden'] : styles.progress} variant="determinate" value={progress} />
      <Sidebar />
      <div className={styles["games-list-right"]}>
        <div className={styles["games-list-right-top"]}>
          <Field
            placeholder="search 823,322 games"
            type="search"
            Icon={SearchIcon}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Avatar className={styles.avatar}>Vl</Avatar>
          <IconButton aria-label="cart" className={styles.cart}>
            <ShoppingCartIcon />
            <p>300$</p>
          </IconButton>
        </div>

        <div className={styles["games-list-right-cards"]}>
          <h1>New and Trending</h1>

          <Grid className={styles["games-list-right-cards-grid"]} container spacing={2}>
            {filteredGames?.map((game) => {
              return (
                <Grid item xs={6} md={4} lg={4} xl={3} key={game.id}>
                  <GameCard item={game} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default GamesList;
