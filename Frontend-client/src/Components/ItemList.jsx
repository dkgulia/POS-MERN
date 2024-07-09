// ItemList.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ItemList = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log('handleAddToCart called with item:', item);
    dispatch({
      type: 'updateCart',
      payload: item,
    });
  };

  return (
    <Card sx={{ width: 250, height: 250, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardMedia
        sx={{ height: '100%', backgroundSize: 'cover' }}
        image={item.image}
        title={item.name}
      />
      <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button
          onClick={handleAddToCart}
          size="small"
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            width: '120px',
            '&:hover': {
              backgroundColor: 'primary.dark'
            }
          }}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card> 
  );
};

export default ItemList;
