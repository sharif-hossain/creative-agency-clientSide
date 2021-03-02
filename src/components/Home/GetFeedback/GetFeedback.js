import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 300,
    marginBottom: 20,
  },
  media: {
    marginTop: 10,
    marginLeft: 10,
    height: 80,
    width: 80,
    borderRadius:50,
  },
});

const GetFeedback = ({ feedback }) => {
  const classes = useStyles();

  return (
    <div className="col-md-4">
      <Card className={classes.root}>
        <CardActionArea>
          <div className="d-flex">
            <div>
              <CardMedia
                className={classes.media}
                image={`${feedback.photoURL}`}
                title="Contemplative Reptile"
              />
            </div>
            <div>
              <h4 className="text-right ml-5 mt-3">{feedback.name}</h4>
            </div>
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {feedback.company}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {feedback.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default GetFeedback;
