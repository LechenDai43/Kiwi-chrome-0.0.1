import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Filter from "../../components/Filter/Filter";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ItemBox from "../../components/Item/ItemBox";
import SortButton from "../../components/SortButton/SortButton";
import MainPageStyle from "./MainPageStyle.css";
import ol from "eslint-plugin-jsx-a11y/lib/util/implicitRoles/ol";

const fakeData = [
    {
        website: 'Farfetch',
        imgSrc: 'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/1/21-08-2019_commonprojects_originalachilleslow_white_1528-0506_jm_1x.jpg',
        price: 325,
        free_ship: 1,
        ship_cost: 0,
        size: [39, 40, 41, 42, 43, 44, 45, 46, 47],
        popularity: 10,
        url: "https://www.farfetch.com/shopping/men/common-projects-achilles-lace-up-sneakers-item-13838256.aspx?storeid=10853"
    },
    {
        website: 'SSense',
        imgSrc: 'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/1/21-08-2019_commonprojects_originalachilleslow_white_1528-0506_jm_1x.jpg',
        price: 495,
        free_ship: 1,
        ship_cost: 0,
        size: [40, 41, 42, 43],
        popularity: 7,
        url: 'https://www.ssense.com/en-us/men/product/common-projects/white-achilles-laceless-sneakers/5702571'
    },
    {
        website: 'END.',
        imgSrc: 'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/1/21-08-2019_commonprojects_originalachilleslow_white_1528-0506_jm_1x.jpg',
        price: 425,
        free_ship: 0,
        ship_cost: 20,
        size: [38, 39, 40, 41, 42, 43, 44, 45],
        popularity: 6,
        url: 'https://www.endclothing.com/us/common-projects-original-achilles-low-1528-0506.html'
    },
    {
        website: 'Saks Fifth Avenue',
        imgSrc: 'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/1/21-08-2019_commonprojects_originalachilleslow_white_1528-0506_jm_1x.jpg',
        price: 425,
        free_ship: 1,
        ship_cost: 0,
        size: [39, 40, 41, 42, 43, 44, 45, 46, 47],
        popularity: 4,
        url: 'https://www.saksfifthavenue.com/product/common-projects-original-achilles-leather-low-top-sneakers-0400099153185.html?dwvar_0400099153185_color=WHITE'
    },
    {
        website: 'Neiman Marcus',
        imgSrc: 'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/1/21-08-2019_commonprojects_originalachilleslow_white_1528-0506_jm_1x.jpg',
        price: 425,
        free_ship: 0,
        ship_cost: 23,
        size: [39, 40, 41, 42, 43, 44, 45, 46],
        popularity: 10,
        url: 'https://www.neimanmarcus.com/p/common-projects-mens-achilles-leather-low-top-sneakers-white-prod198371542?childItemId=NMN4HT0_'
    },

];

@connect()
export default class MainPage extends Component {

    constructor(props) {
        super(props);
        let dupFakeData = [];
        for (let i = 0; i < fakeData.length; i++) {
            dupFakeData.push(fakeData[i]);
        }
        this.state = {
            items: dupFakeData,
            target_size: -1,
            sort_key: "Default"
        }
    }

    populateItems() {
        let result = [];
        for (let i = 0; i < this.state.items.length; i++) {
            let found = 0;
            for (let j = 0; j < this.props.brands.length; j++) {
                if (this.props.brands[j] === this.state.items[i].website) {
                    found = 1;
                    break;
                }
            }

            if (found === 0) {
                continue;
            }

            let detail = this.state.items[i];
            if (this.state.target_size === -1) {
                let newLen = result.push(<ItemBox detail={detail}/>);
            }
            else {
                var sizes = this.state.items[i].size;
                for (var j = 0; j < sizes.length; j++) {
                    if (sizes[j] == this.state.target_size) {
                        let newLen = result.push(<ItemBox detail={detail}/>);
                        break;
                    }
                }
            }
        }
        return result;
    }

    handleFilter (event) {
        let inputvalue = event.target.value;
        let keySize = inputvalue;
        if (keySize < 34 || keySize > 47) {
            if (keySize == "") {
                this.setState({target_size: -1});
                this.forceUpdate();
            }
            return null;
        }
        this.setState({target_size: keySize});
        this.forceUpdate();
    }

    handleSorter (event) {
        let checkedKey = event.target.innerText;
        if (checkedKey == "Price") {
            let newList = [];
            let oldList = this.state.items;
            while (newList.length < oldList.length) {
                let i = -1;
                let value = -1;
                for (let j = 0; j < oldList.length; j++) {
                    if (oldList[j] !== undefined) {
                        if (value === -1) {
                            value = oldList[j].price + oldList[j].ship_cost;
                            i = j;
                        }
                        else if (value > oldList[j].price + oldList[j].ship_cost){
                            value = oldList[j].price + oldList[j].ship_cost;
                            i = j;
                        }
                    }
                }
                newList.push(oldList[i]);
                delete oldList[i];
            }
            this.setState({items: newList});
            this.forceUpdate();
        }
        else if (checkedKey == "Popularity") {
            let newList = [];
            let oldList = this.state.items;
            while (newList.length < oldList.length) {
                let i = -1;
                let value = -1;
                for (let j = 0; j < oldList.length; j++) {
                    if (oldList[j] !== undefined) {
                        if (value === -1) {
                            value = oldList[j].popularity;
                            i = j;
                        }
                        else if (value < oldList[j].popularity){
                            value = oldList[j].popularity;
                            i = j;
                        }
                    }
                }
                newList.push(oldList[i]);
                delete oldList[i];
            }
            this.setState({items: newList});
            this.forceUpdate();
        }
    }

    render() {
        return (
            <div className= {MainPageStyle.mainpagebodyleo}>
                <div className={MainPageStyle.mainupperpart}>
                    <div className={MainPageStyle.mainaroundheader}>
                        <Header/>
                        <p></p>
                    </div>
                    <div className={MainPageStyle.filterandsorter}>
                        <Filter handler={(event) => this.handleFilter(event)}/>
                        <SortButton handler={(event) => this.handleSorter(event)}/>
                    </div>
                </div>
                <hr/>
                <div className= {MainPageStyle.mainitemslist}>
                    {this.populateItems()}
                </div>
                <div className={MainPageStyle.mainlowerpart}>
                    <hr/>
                    <Footer redirection={(targetPage) => this.props.redirection(targetPage)} page='Main'/>
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
