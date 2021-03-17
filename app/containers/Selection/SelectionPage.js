import React, { Component} from 'react';
import { connect } from 'react-redux';
import Header from "../../components/Header/Header";
import Selector from "../../components/Selector/Selector";

@connect()
export default class SelectionPage extends Component {
    populateStore() {
        return (
            <Selector/>
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
    }
}
