import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import RateReviewIcon from '@material-ui/icons/RateReview';
import PersonIcon from '@material-ui/icons/Person';
import style from './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // enter state here
    };
  }

  render() {
    return (
      <div className={style.navbar}>
        <HomeIcon className={style.first}/>
        <RateReviewIcon className={style.second}/>
        <PersonIcon className={style.third}/>
      </div>
    );
  }
 }

export default Footer;
