import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Paper } from "@mui/material";
import PhotoSlider from "../../../layout/photo-slider/PhotoSlider";
import styles from "./GameCard.module.scss";
import { IGame } from "../../../../Types/game.interface";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import gamesStore from "../../../../stores/games-store";
import { observer } from "mobx-react-lite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

interface Props {
  item: IGame;
  id?: number;
}

const GameCard = observer(({ item, id }: Props) => {
  const router = useNavigate();

  if (!item) {
    return null;
  }

  const slides: string[] = [
    ...(item.short_screenshots || []).map((image) => image.image),
  ];

  const handleAddToFav = (id: any) => {
    console.log("Adding to favorites", id);
    gamesStore.addToFav(id);
  };

  const handleRemoveFromFav = (id: any) => {
    console.log("Removing from favorites", id);
    gamesStore.removeFromFav(id);
  };

  const handleAddToCart = (id: any) => {
    console.log("Adding to cart", id);
    gamesStore.addToCart(id);
  };

  const handleRemoveFromCart = (id: any) => {
    console.log("Removing from cart", id);
    gamesStore.removeFromCart(id);
  };

  return (
    <Card className={styles["game-card"]} sx={{ maxWidth: 280 }}>
      <CardActionArea onClick={() => router(`game/${id}`)}>
        <PhotoSlider slides={slides} />
        <CardContent>
          <Paper
            style={{
              width: "50px",
              borderRadius: "12px",
              border: "1px solid green",
              textAlign: "center",
              background: "none",
            }}
          >
            <Typography variant="h6" color={"green"}>
              {item.rating}
            </Typography>
          </Paper>

          <Typography
            className={styles["game-card__title"]}
            gutterBottom
            variant="h5"
            component="div"
          >
            {item.name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <p>
              Release date: <span>{item.released}</span>
            </p>
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            className={styles["game-card__genres"]}
          >
            <p>
              Genres:
              {item.genres
                .map((genre) => {
                  return <span key={genre.id}>{genre.name}</span>;
                })
                .slice(0, 2)}
            </p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() =>
            gamesStore.isFavAdded(item.id)
              ? handleRemoveFromFav(item.id)
              : handleAddToFav(item.id)
          }
          size="medium"
          color="inherit"
        >
          {gamesStore.isFavAdded(item.id) ? (
            <BookmarkRemoveIcon fontSize={"large"} />
          ) : (
            <BookmarkIcon fontSize={"large"} />
          )}
        </Button>
        <Button
          onClick={() =>
            gamesStore.isProductAdded(item.id)
              ? handleRemoveFromCart(item.id)
              : handleAddToCart(item.id)
          }
          size="medium"
          color="inherit"
        >
          {gamesStore.isProductAdded(item.id) ? (
            <RemoveShoppingCartIcon fontSize={"large"} />
          ) : (
            <AddShoppingCartIcon fontSize={"large"} />
          )}
        </Button>
      </CardActions>
    </Card>
  );
});

export default GameCard;
