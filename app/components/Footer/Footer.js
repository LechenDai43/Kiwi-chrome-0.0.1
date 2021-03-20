import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import RateReviewIcon from '@material-ui/icons/RateReview';
import PersonIcon from '@material-ui/icons/Person';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // enter state here
    };
  }

  render() {
    return (
      <div>
        <HomeIcon />
        <RateReviewIcon />
        <PersonIcon />
      </div>
    );
  }
 }

export default Footer;
