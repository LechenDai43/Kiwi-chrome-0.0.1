import React, { PropTypes, Component } from 'react';
import BoxStyle from './ItemBox.css';

export default class ItemBox extends Component{
    constructor(props) {
        super(props);
    }

    openTab(url) {
        chrome.tabs.create({ url: url });
    }

    render() {
        const { website, imgSrc, price, free_ship, ship_cost, size, popularity, url } = this.props.detail;
        return (
            <div className= {BoxStyle.main_itembox_leo}>
                <div className={BoxStyle.main_itembox_img_btn}>
                    <img className={BoxStyle.main_itembox_image_leo} src={imgSrc}/>
                    <input className={BoxStyle.maim_item_buy_it_button} type="button" value="Buy It!" onClick={() => this.openTab(url)}/>
                </div>
                <div className={BoxStyle.main_itembox_info_leo}>
                    <p className={BoxStyle.main_itembox_website}><span>{website}</span></p>
                    <p className={BoxStyle.main_itembox_price}>${price} + {free_ship === 1? "free shipping": "$" + ship_cost + " shipping"}</p>

                </div>
            </div>
        );
    }
}
