import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Filter from "../../components/Filter/Filter";
import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import ItemBox from "../../components/Item/ItemBox";
// import SortButton from "../../components/SortButton/SortButton";

@connect()
export default class MainPage extends Component {
    populateItems() {
        return (
          <ItemBox/>
        );
        // return (
        //     <h2>An item</h2>
        // );
    }

    render() {
        return (
            <div className="main-page-body-leo">
                <Header/>
                <div className="filter-and-sorter">
                    <Filter/>

                </div>
                <hr/>
                <div className="matched-items">
                    {this.populateItems()}
                </div>
            </div>
         );

        // return (
        //     <div className="main-page-body-leo">
        //         <h1>Kiwi Header</h1>
        //         <Kiwi_header></Kiwi_header>
        //         <div className="filter-and-sorter">
        //             <Filter/>
        //         </div>
        //         <hr/>
        //         <div className="matched-items">
        //             {this.populateItems()}
        //         </div>
        //         <h1>Kiwi Footer</h1>
        //     </div>
        //  );
    }
}
