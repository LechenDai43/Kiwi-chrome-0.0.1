import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import style from './App.css';
import Filter from "../components/Filter";
import Kiwi_header from "../components/Kiwi_header";
import KiwiFooter from "../components/KiwiFooter";
import ItemBox from "../components/ItemBox";

@connect()
export default class SelectionPage extends Component {
    populateStore() {
        return (
            <h3>Farfetch</h3>
        );
    }

    render() {
        return (
            // <div className="selection-page-body-leo">
            //     <Kiwi_header/>
            //     <h3>Select your favorite stores</h3>
            //     </hr>
            //     <div className="list-of-stores">
            //         {this.populateStore()}
            //     </div>
            //     // Here should be the finish button
            // </div>
         );
        return (
            <div className="selection-page-body-leo">
                <h1>Kiwi Header</h1>
                <h3>Select your favorite stores</h3>
                </hr>
                <div className="list-of-stores">
                    {this.populateStore()}
                </div>
                // Here should be the finish button
            </div>
        );
    }
}