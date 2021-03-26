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
      if (this.props.page === IconText) {
          return;
      }
      this.props.redirection(IconText);
  }

  render() {
    return (
      <div className={style.navbar}>
        <HomeIcon className={style.first + " " + (this.props.page === 'Main'? " " + style.grey : style.green)}
                  onClick={() => this.setCurrent('Main')}/>
        <RateReviewIcon className={style.second + " " + (this.props.page === 'Review'? style.grey : style.green)}
                onClick={() => this.setCurrent('Review')}/>
        <PersonIcon className={style.third + " " + (this.props.page === 'Profile'? " " + style.grey : style.green)}
                onClick ={() => this.setCurrent('Profile')}/>
      </div>
    );
  }
 }

export default Footer;
