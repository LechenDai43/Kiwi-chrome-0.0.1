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
    populateItems() {
        // return (
        //   <ItemBox/>
        // );
        return (
            <h2>An item</h2>
        );
    }

    render() {
        // return (
        //     <div className="main-page-body-leo">
        //         <Kiwi_header/>
        //         <div className="filter-and-sorter">
        //             <Filter/>
        //         </div>
        //         <hr/>
        //         <div className="matched-items">
        //             {this.populateItems()}
        //         </div>
        //         <KiwiFooter/>
        //     </div>
        //  );

        return (
            <div className="main-page-body-leo">
                <h1>Kiwi Header</h1>
                <div className="filter-and-sorter">
                    <Filter/>
                </div>
                <hr/>
                <div className="matched-items">
                    {this.populateItems()}
                </div>
                <h1>Kiwi Footer</h1>
            </div>
         );
    }
}