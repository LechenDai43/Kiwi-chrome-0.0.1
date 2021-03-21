import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Reviews from '../../components/Reviews/Reviews';
import Footer from '../../components/Footer/Footer';

class ReviewContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // enter necessary state here
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Reviews />
        <Footer redirection={(targetPage) => this.props.redirection(targetPage)} page='Review' />
      </div>
    );
  }
}

export default ReviewContainer;
