import React, {Component} from "react";
import KiwiHeader from "../KiwiHeader/KiwiHeader";
import ReviewBox from "../ReviewBox/ReviewBox";
import KiwiFooter from "../KiwiFooter/KiwiFooter";

class ReviewContainer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      // enter necessary state here
    };
  }

  render () {
    return (
      <div>
        <KiwiHeader />
        <ReviewBox />
        <KiwiFooter />
      </div>
    )
  }
}

export default ReviewContainer;
