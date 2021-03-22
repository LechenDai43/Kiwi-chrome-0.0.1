import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
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
  const { avatar, avatarImg, username, imgSrc, tags, review } = props.review;

  return (
    <div>
      <div className={ReviewStyle.in_line}>
        <Avatar className={classes.orange} alt={avatar} src={avatarImg}/>
        <span className={ReviewStyle.username_position}>{username}</span>
        <div className={ReviewStyle.button_position}>
          <button className={ReviewStyle.button_size}>
            Follow
          </button>
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
            <button className={ReviewStyle.tag_size}>
              {tag}
            </button>
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
