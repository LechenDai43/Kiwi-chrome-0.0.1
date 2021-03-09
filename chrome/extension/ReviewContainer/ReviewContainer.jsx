import React, {Component} from "react";
import Header from "../Header/Header";
import ReviewBox from "../ReviewBox/ReviewBox";
import Footer from "../Footer/Footer";

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
        <Header />
        <ReviewBox />
        <Footer />
      </div>
    )
  }
}

export default ReviewContainer;
