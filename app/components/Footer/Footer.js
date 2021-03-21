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
      current: 'Main'
    };
  }

  setCurrent = (IconText) => {
    this.props.redirection(IconText);
  }

  render() {
    return (
      <div className={style.navbar}>
        <HomeIcon className={style.first + (this.props.page === 'Main'? " " + style.grey : "")}
                  onClick={() => this.setCurrent('Main')}/>
        <RateReviewIcon className={style.second} onClick={() => this.setCurrent('Review')}/>
        <PersonIcon className={style.third} onClick ={() => this.setCurrent('Profile')}/>
      </div>
    );
  }
 }

export default Footer;
