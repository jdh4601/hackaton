import itemData from '../ItemData';
import styles from './styles.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function PaintImage() {
  return (
    <Card style={styles.image}>
      <CardActionArea>
        <CardMedia component="img" src={itemData[0].img} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {itemData[0].title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
