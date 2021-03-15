import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import style from './App.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Selector from "../../components/Selector/Selector";

@connect()
export default class SelectionPage extends Component {
    populateStore() {
        return (
            <Selector>
        );
    }

    render() {
            return (
            <div className="selection-page-body-leo">
                <Header/>
                <h3 className="selection-instruction">Select your favorite stores</h3>
                <hr/>
                <div className="list-of-stores">
                    {this.populateStore()}
                </div>
                // Here should be the finish button
            </div>
            );
        // return (
        //     <div className="selection-page-body-leo">
        //         <h1>Kiwi Header</h1>
        //         <h3 className="selection-instruction">Select your favorite stores</h3>
        //         <hr/>
        //         <div className="list-of-stores">
        //             {this.populateStore()}
        //         </div>
        //         // Here should be the finish button
        //     </div>
        // );
    }
}
