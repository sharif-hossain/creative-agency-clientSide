import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 300,
    textAlign:'center',
  },
  media: {
    marginTop: 10,
    height: 100,
    width: 100,
    textAlign: "center",
  },
});

const GetService = ({ service, handleClick}) => {
  const classes = useStyles();
  return (
    <div className="col-md-4 mb-4">
      <Card onClick= {()=>handleClick(service._id)} className={classes.root}>
        <CardActionArea>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CardMedia
              className={classes.media}
              image={`https://ancient-bastion-75645.herokuapp.com/${service.image}`}
              title="Contemplative Reptile"
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {service.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {service.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default GetService;
