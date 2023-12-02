import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Paper } from "@mui/material";
import PhotoSlider from "../../../layout/photo-slider/PhotoSlider";
import styles from "./GameCard.module.scss";
import { IGame } from "../../../../Types/game.interface";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

interface Props {
  item: IGame;
}

const GameCard = ({ item }: Props) => {
  const slides: string[] = [
    ...item.short_screenshots.map((image) => image.image),
  ];
  return (
    <Card className={styles["game-card"]} sx={{ maxWidth: 345 }}>
      <CardActionArea>
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
                  return <span>{genre.name}</span>;
                })
                .slice(0, 2)}
            </p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="inherit">
          <CardGiftcardIcon fontSize={"large"} />
        </Button>
        <Button size="medium" color="inherit">
          <AddShoppingCartIcon fontSize={"large"} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default GameCard;
