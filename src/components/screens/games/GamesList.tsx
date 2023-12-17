import Sidebar from "../../layout/sidebar/Sidebar";
import Field from "../../ui/field/Field";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./GamesList.module.scss";
import { Avatar, Grid, IconButton, LinearProgress } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useMemo, useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import DropdownMenu from "../../layout/dropdown-menu/DropdownMenu";
import InfiniteScroll from "react-infinite-scroll-component";
import { observer } from "mobx-react-lite";
import gamesStore from "../../../stores/games-store";
import { Link } from "react-router-dom";
import GamesGrid from "../../layout/movie-grid/GamesGrid";

const GamesList = observer(() => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    try {
      setLoading(true);
      if (gamesStore.selectedOrder !== gamesStore.prevSelectedOrder) {
        gamesStore.setPage();
        setCurrentPage(1);
      }

      gamesStore.fetchGames(currentPage);
      console.log(gamesStore.selectedOrder);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [gamesStore.selectedOrder, currentPage]);

  const filteredGames = useMemo(() => {
    if (!gamesStore.games) return [];

    return gamesStore.games.filter((game) =>
      game.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );
  }, [gamesStore.games, debouncedSearchQuery]);

  console.log(loading);

  return (
    <div className={styles["games-list"]}>
      <LinearProgress
        className={loading ? styles["progress"] : styles["progress-hidden"]}
        variant="determinate"
        value={loading ? 50 : 0}
      />
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
          <Link to="/user">
            <IconButton aria-label="cart" className={styles.cart}>
              <ShoppingCartIcon />
              <p>0$</p>
            </IconButton>
          </Link>
        </div>
        <div className={styles["games-list-right-cards"]}>
          <h1>New and Trending</h1>

          <div className={styles["games-list-right-cards-dropdown"]}>
            <DropdownMenu />
          </div>

          <InfiniteScroll
            dataLength={filteredGames.length}
            next={() => {
              setCurrentPage((prevPage) => prevPage + 1);
            }}
            hasMore={true}
            loader={""}
          >
            <GamesGrid games={filteredGames} />
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
});

export default GamesList;
