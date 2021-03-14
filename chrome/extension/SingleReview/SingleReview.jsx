import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

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
      <div style={{ display: "flex", height: "45px" }}>
        <Avatar
          className={classes.orange}
          style={{ height: "45px", width: "45px" }}
        >
          N
        </Avatar>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "10px"
          }}
        >
          Jinhong
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "78px"
          }}
        >
          <Button
            variant="outlined"
            style={{
              width: "90px",
              height: "24px",
              textTransform: "none",
              borderRadius: "20px"
            }}
          >
            Follow
          </Button>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1556807457-9c4f0a528934?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        alt="Fashion shoe"
        width="300px"
        height="250px"
        style={{ paddingTop: "8px" }}
      />
      <div style={{ display: "flex" }}>
        <FavoriteBorderIcon />
        {tags.map((tag) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: "15px"
            }}
          >
            <Button
              variant="outlined"
              style={{
                width: "97px",
                height: "13px",
                textTransform: "none",
                borderRadius: "10px"
              }}
            >
              {tag}
            </Button>
          </div>
        ))}
      </div>
      <p style={{ width: "313px", marginTop: "6px" }}>
        I bought this shoe with size 37 from SSense. The size goes a little bit
        smaller than normal. I really like this shoe! It is very comfortable and
        you can wear it all the time.
      </p>
    </div>
  );
}