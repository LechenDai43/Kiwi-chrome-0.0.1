import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const options = ["All", "Most Popular"];

export default function SortButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [shoeSize, setShoeSize] = React.useState("All");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-haspopup="true"
        onClick={handleClick}
        style={{
          textTransform: "none",
          width: "147px",
          height: "18px",
          borderRadius: "5px"
        }}
        variant="outlined"
      >
        Sort
      </Button>
      <StyledMenu
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 20 * 4.5,
            width: "18ch"
          }
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={shoeSize} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
