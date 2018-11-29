import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    margin: 30,
    maxWidth: 400,
    minWidth: 400,
    boxShadow: "30px 30px 30px lightgrey"

  },
  media: {
    height: 180,
  },
  CardContent: {
    direction: "rtl",
  },
};

class MediaCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={require('C:/Users/avishay/Development/React Projects/hh/hablokia/src/newYork_downTown.jpg')}
          // image={require(this.props.cardImagePath)}
          // title="Contemplative Reptile"

          />
          <CardContent className={classes.CardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {/* ניו יורק */}
              {this.props.cardSubject}
            </Typography>
            <Typography component="p">
              {/* Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica */}
              {this.props.cardDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
      </Card>
    );
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
