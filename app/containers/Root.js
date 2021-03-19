import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import MainPage from "./Main/MainPage";
import SelectionPage from "./Selection/SelectionPage";
import ReviewContainer from "./Review/ReviewContainer";

export default class Root extends Component {

  render() {
    const { store } = this.props;
    return (
      <Provider store={store} style={{width:"200px",height:"500px"}}>
        <SelectionPage />
      </Provider>
    );
  }
}
