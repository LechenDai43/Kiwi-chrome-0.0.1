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
        imgSrc: 'https://s3-alpha-sig.figma.com/img/ab39/dd35/f0d9a735d34b21f8bd07e32242610296?Expires=1616976000&Signature=NhOWp4q4efY1CkXJ3qjPZ9zvm5o~zgKd2wP6jmqYtu6mlW35gcbV6yQPL6nX6ZAbTI8qVTqi-ZAZOwEGm3ADPj7lHjR8vwI-~RoJ4SJRrbfdJeUb4mIFzBEs1V15nPdUBM-ZQX4oEV29Iw~LWafioA9Sg7jO6NsNSvzSmbHq6gPITukgufrAioQwneRnatkYSNC8BURUjcc2Hr098UAkTlYxAmovEOpUWAzvEyLZ2NIhxGAJp8Ii537x~Ks6KsjXiPyv4bHVCEUqmR2T0CvlBzODWYhjf-rqX~8jpF8iTNolftueXWDTPGoTOYUF09P2t~kLpaIJp13sF0MDqrzi7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        price: 461,
        free_ship: 1,
        ship_cost: 0,
        size: [40, 41, 42, 43],
        popularity: 10,
        url: "https://www.farfetch.com/shopping/men/common-projects-low-top-sneakers-item-16378798.aspx?storeid=9610"
    },
    {
        website: 'SSense',
        imgSrc: 'https://s3-alpha-sig.figma.com/img/ab39/dd35/f0d9a735d34b21f8bd07e32242610296?Expires=1616976000&Signature=NhOWp4q4efY1CkXJ3qjPZ9zvm5o~zgKd2wP6jmqYtu6mlW35gcbV6yQPL6nX6ZAbTI8qVTqi-ZAZOwEGm3ADPj7lHjR8vwI-~RoJ4SJRrbfdJeUb4mIFzBEs1V15nPdUBM-ZQX4oEV29Iw~LWafioA9Sg7jO6NsNSvzSmbHq6gPITukgufrAioQwneRnatkYSNC8BURUjcc2Hr098UAkTlYxAmovEOpUWAzvEyLZ2NIhxGAJp8Ii537x~Ks6KsjXiPyv4bHVCEUqmR2T0CvlBzODWYhjf-rqX~8jpF8iTNolftueXWDTPGoTOYUF09P2t~kLpaIJp13sF0MDqrzi7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        price: 500,
        free_ship: 1,
        ship_cost: 0,
        size: [39, 40, 42, 43],
        popularity: 7,
        url: ''
    },
    {
        website: 'END.',
        imgSrc: 'https://s3-alpha-sig.figma.com/img/ab39/dd35/f0d9a735d34b21f8bd07e32242610296?Expires=1616976000&Signature=NhOWp4q4efY1CkXJ3qjPZ9zvm5o~zgKd2wP6jmqYtu6mlW35gcbV6yQPL6nX6ZAbTI8qVTqi-ZAZOwEGm3ADPj7lHjR8vwI-~RoJ4SJRrbfdJeUb4mIFzBEs1V15nPdUBM-ZQX4oEV29Iw~LWafioA9Sg7jO6NsNSvzSmbHq6gPITukgufrAioQwneRnatkYSNC8BURUjcc2Hr098UAkTlYxAmovEOpUWAzvEyLZ2NIhxGAJp8Ii537x~Ks6KsjXiPyv4bHVCEUqmR2T0CvlBzODWYhjf-rqX~8jpF8iTNolftueXWDTPGoTOYUF09P2t~kLpaIJp13sF0MDqrzi7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        price: 425,
        free_ship: 0,
        ship_cost: 20,
        size: [43],
        popularity: 6,
        url: ''
    },
    {
        website: 'Saks Fifth Avenue',
        imgSrc: 'https://s3-alpha-sig.figma.com/img/ab39/dd35/f0d9a735d34b21f8bd07e32242610296?Expires=1616976000&Signature=NhOWp4q4efY1CkXJ3qjPZ9zvm5o~zgKd2wP6jmqYtu6mlW35gcbV6yQPL6nX6ZAbTI8qVTqi-ZAZOwEGm3ADPj7lHjR8vwI-~RoJ4SJRrbfdJeUb4mIFzBEs1V15nPdUBM-ZQX4oEV29Iw~LWafioA9Sg7jO6NsNSvzSmbHq6gPITukgufrAioQwneRnatkYSNC8BURUjcc2Hr098UAkTlYxAmovEOpUWAzvEyLZ2NIhxGAJp8Ii537x~Ks6KsjXiPyv4bHVCEUqmR2T0CvlBzODWYhjf-rqX~8jpF8iTNolftueXWDTPGoTOYUF09P2t~kLpaIJp13sF0MDqrzi7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        price: 475,
        free_ship: 1,
        ship_cost: 0,
        size: [40, 43, 44],
        popularity: 4,
        url: ''
    },
    {
        website: 'Neiman Marcus',
        imgSrc: 'https://s3-alpha-sig.figma.com/img/ab39/dd35/f0d9a735d34b21f8bd07e32242610296?Expires=1616976000&Signature=NhOWp4q4efY1CkXJ3qjPZ9zvm5o~zgKd2wP6jmqYtu6mlW35gcbV6yQPL6nX6ZAbTI8qVTqi-ZAZOwEGm3ADPj7lHjR8vwI-~RoJ4SJRrbfdJeUb4mIFzBEs1V15nPdUBM-ZQX4oEV29Iw~LWafioA9Sg7jO6NsNSvzSmbHq6gPITukgufrAioQwneRnatkYSNC8BURUjcc2Hr098UAkTlYxAmovEOpUWAzvEyLZ2NIhxGAJp8Ii537x~Ks6KsjXiPyv4bHVCEUqmR2T0CvlBzODWYhjf-rqX~8jpF8iTNolftueXWDTPGoTOYUF09P2t~kLpaIJp13sF0MDqrzi7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        price: 485,
        free_ship: 0,
        ship_cost: 23,
        size: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
        popularity: 10,
        url: ''
    },

];

@connect()
export default class MainPage extends Component {

    constructor(props) {
        super(props);
        var dupFakeData = [];
        for (var i = 0; i < fakeData.length; i++) {
            dupFakeData.push(fakeData[i]);
        }
        this.state = {
            items: dupFakeData,
            target_size: -1,
            sort_key: "Default"
        }
        console.log(this.state.items);
        console.log(fakeData);
    }

    populateItems() {
        var result = [];
        for (var i = 0; i < this.state.items.length; i++) {
            var detail = this.state.items[i];
            if (this.state.target_size === -1) {
                result.push(<ItemBox detail={detail}/>);
            }
            else {
                var sizes = this.state.items[i].size;
                for (var j = 0; j < sizes.length; j++) {
                    if (sizes[j] == this.state.target_size) {
                        result.push(<ItemBox detail={detail}/>);
                        break;
                    }
                }
            }
        }
        return result;
    }

    handleFilter (event) {
        var inputvalue = event.target.value;
        var keySize = inputvalue;
        console.log("called in main page function");
        console.log(keySize);
        if (keySize < 34 || keySize > 46) {
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
        var checkedKey = event.target.innerText;
        console.log(checkedKey);
        if (checkedKey == "Price") {
            var newList = [];
            var oldList = this.state.items;
            while (newList.length < oldList.length) {
                var i = -1;
                var value = -1;
                for (var j = 0; j < oldList.length; j++) {
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
            var newList = [];
            var oldList = this.state.items;
            while (newList.length < oldList.length) {
                var i = -1;
                var value = -1;
                for (var j = 0; j < oldList.length; j++) {
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
