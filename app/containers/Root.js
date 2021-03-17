import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import MainPage from "./Main/MainPage";
import SelectionPage from "./Selection/SelectionPage";
import ReviewContainer from "./Review/ReviewContainer";

export default class Root extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  }
}
