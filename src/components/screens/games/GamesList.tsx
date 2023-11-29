import React from "react";
import Sidebar from "../../layout/sidebar/Sidebar";
import Field from "../../ui/field/Field";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./GamesList.module.scss";
import { Avatar, Grid, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GameCard from "./game-card/GameCard";
import { IGame } from "../../../Types/game.interface";

interface Props {
  games?: IGame[] | null;
}



const GamesList= ({ games }: Props) => {
  console.log(games);
  return (
    <div className={styles["games-list"]}>
      <Sidebar />
      <div className={styles["games-list-right"]}>
        <div className={styles["games-list-right-top"]}>
          <Field
            placeholder="search 823,322 games"
            type="search"
            Icon={SearchIcon}
          />
          <Avatar className={styles.avatar}>Vl</Avatar>
          <IconButton aria-label="cart" className={styles.cart}>
            <ShoppingCartIcon />
            <p>300$</p>
          </IconButton>
        </div>

        <div className={styles["games-list-right-cards"]}>
          <h1>New and Trending</h1>

          <Grid container spacing={1}>
            {games?.map((game) => {
              return (
                <Grid item spacing={1} xs={4} key={game.id}>
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
