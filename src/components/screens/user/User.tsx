import { Avatar, Button } from "@mui/material";
import Tabs from '../../layout/tabs/Tabs'
import styles from "./User.module.scss";
import Sidebar from "../../layout/sidebar/Sidebar";
import LogoutIcon from "@mui/icons-material/Logout";
import { GamesApiResponse } from "../../../Types/game.interface";
import { useFetch } from "../../../hooks/useFetch";
import { getGames } from "../../../services/rawgApi";

const User = () => {
    const { data } = useFetch<GamesApiResponse, null>(getGames);
  return (
    <div className={styles.user}>
      <Sidebar />
      <div className={styles['user-inner']}>
      <div className={styles["user-info"]}>
        <h1>Vladislav Alekseev</h1>
        <div className={styles["user-info-right"]}>
          <Avatar sx={{ width: 56, height: 56 }}>Vl</Avatar>
          <Button variant="contained" color="error">
            LogOut <LogoutIcon />
          </Button>
        </div>
      </div>
        <div className={styles['user-tabs']}>
        <Tabs games={data?.results}/>
        </div>
      </div>
    </div>
  );
};

export default User;
