import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import MainPage from './Main/MainPage';
import SelectionPage from './Selection/SelectionPage';
import ReviewContainer from './Review/ReviewContainer';

const possible_page = ['Select', 'Main', 'Review', 'Profile'];

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Select',
      checked_list: ['Farfetch', 'SSense', 'END.', 'Saks Fifth Avenue', 'Neiman Marcus']
    };
  }

  fromSelection2Main (list) {
    this.setState({page: 'Main'});
    if (list.length >= 1) {
      this.setState({checked_list: list});
    }
    this.forceUpdate();
  }

  redirectByFooter (targetPage) {
    var valid = 0;
    for (var i = 0; i < possible_page.length; i++) {
      if (targetPage === possible_page[i]) {
        valid = 1;
        break;
      }
    }
    if (valid === 1) {
      this.setState({page: targetPage});
      this.forceUpdate();
    }
  }

  pickPage() {
    if (this.state.page === 'Select') {
      return (<SelectionPage redirection={(list) => this.fromSelection2Main(list)}/>);
    }
    else if (this.state.page === 'Main') {
      return (<MainPage redirection={(targetPage) => this.redirectByFooter(targetPage)} brands={this.state.checked_list}/>)
    }
    else if (this.state.page === 'Review') {
      return (<ReviewContainer redirection={(targetPage) => this.redirectByFooter(targetPage)}/>)
    }
    else {
      return (<h1>Wait</h1>);
    }

  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store} style={{ width: '200px', height: '500px' }}>
        {this.pickPage()}
      </Provider>
    );
  }
}
