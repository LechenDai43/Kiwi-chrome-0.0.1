import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import style from './App.css';
import Filter from "../components/Filter";
import Kiwi_header from "../components/Kiwi_header";
import KiwiFooter from "../components/KiwiFooter";
import ItemBox from "../components/ItemBox";

@connect()
export default class MainPage extends Component {

    static propTypes = {
    };

    populateItems() {
        return (
          <ItemBox/>
        );
    }

    render() {
        return (
            <div className="main-page-body-leo">
                <Kiwi_header/>
                <div className="filter-and-sorter">
                    <Filter/>
                </div>
                <div className="matched-items">
                    {this.populateItems()}
                </div>
                <KiwiFooter/>
            </div>
    );
    }
}