import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import './OrderItem.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 300,
    marginBottom:20,
  },
  media: {
    marginTop: 10,
    marginLeft: 10,
    height: 80,
    width: 80,
  },
});

const OrderedItem = ({ item }) => {
  const classes = useStyles();
  return (
    <div className="col-md-6">
      <Card className={classes.root}>
        <CardActionArea>
          <div className="d-flex">
            <div>
            <CardMedia
              className={classes.media}
              image={`http://localhost:4000/${item.image}`}
              title="Contemplative Reptile"
            />
            </div>
            <div><p className="text-right status">{item.status}</p></div>
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.productTitle}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default OrderedItem;
