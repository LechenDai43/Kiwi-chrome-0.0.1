import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./SingleReview.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500]
  }
}));

const tags = ["# White", "# Fashion"];

export default function SingleReview() {
  const classes = useStyles();

  return (
    <div>
      <div className="in-line">
        <Avatar className={classes.orange}>N</Avatar>
        <span className="username-position">Jinhong</span>
        <div className="button-position">
          <Button variant="outlined" className="button-size">
            Follow
          </Button>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1556807457-9c4f0a528934?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        alt="Fashion shoe"
        width="300px"
        height="250px"
        className="image-position"
      />
      <div className="in-line">
        <FavoriteBorderIcon className="green-color" />
        {tags.map((tag) => (
          <div className="tag-position">
            <Button variant="outlined" className="tag-size">
              {tag}
            </Button>
          </div>
        ))}
      </div>
      <p className="text-position">
        I bought this shoe with size 37 from SSense. The size goes a little bit
        smaller than normal. I really like this shoe! It is very comfortable and
        you can wear it all the time.
      </p>
    </div>
  );
}
