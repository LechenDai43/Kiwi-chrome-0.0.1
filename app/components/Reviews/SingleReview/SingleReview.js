import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PropTypes from 'prop-types';
import ReviewStyle from './SingleReview.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500]
  }
}));

export default function SingleReview(props) {
  const classes = useStyles();
  const { avatar, username, imgSrc, tags, review } = props.review;

  return (
    <div>
      <div className={ReviewStyle.in_line}>
        <Avatar className={classes.orange}>{avatar}</Avatar>
        <span className={ReviewStyle.username_position}>{username}</span>
        <div className={ReviewStyle.button_position}>
          <Button variant="outlined" className={ReviewStyle.button_size}>
            Follow
          </Button>
        </div>
      </div>
      <img
        src={imgSrc}
        alt="Fashion Review"
        width="300px"
        height="250px"
        className={ReviewStyle.image_position}
      />
      <div className={ReviewStyle.in_line}>
        <FavoriteBorderIcon className={ReviewStyle.green_color} />
        {tags.map(tag => (
          <div className={ReviewStyle.tag_position}>
            <Button variant="outlined" className={ReviewStyle.tag_size}>
              {tag}
            </Button>
          </div>
        ))}
      </div>
      <p className={ReviewStyle.text_position}>{review}</p>
    </div>
  );
}

SingleReview.propTypes = {
  review: PropTypes.object
};
