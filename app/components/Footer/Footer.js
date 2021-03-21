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
      current: "MainPage"
    };
  }

  setCurrent = (IconText) => {
    this.setState({current: IconText});
  }

  render() {
    return (
      <div className={style.navbar}>
        <button className={style.first} onClick={() => this.setCurrent("MainPage")}><HomeIcon/></button>
        <button className={style.second} onClick={() => this.setCurrent("ReviewContainer")}><RateReviewIcon/></button>
        <button className={style.third}><PersonIcon/></button>
      </div>
    );
  }
 }

export default Footer;
