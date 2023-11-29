import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import PhotoSlider from '../../../layout/photo-slider/PhotoSlider';
import styles from './GameCard.module.scss';
import { IGame } from '../../../../Types/game.interface';

interface Props {
    item: IGame
}

const GameCard = ({ item }: Props) => {
    const slides:string[] = [...item.short_screenshots.map((image) => image.image)]
  return (
    <Card className={styles['game-card']} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <PhotoSlider slides={slides}/>
        <CardContent>
          <Typography className={styles['game-card__title']} gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}

export default GameCard;