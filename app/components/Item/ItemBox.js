import React, { PropTypes, Component } from 'react';

export default class ItemBox extends Component{
    constructor(prop) {
        super(prop);
        this.state = {
            image_url: "",
            website: "",
            price: 300,
            free_ship: false,
            ship_cost: 1
        }
    }

    render() {
        return (
            <div classNames = "main-itembox-leo">
                <img classNames="main-itembox-image-leo" url={this.state.image_url}/>
                <div classNames="main-itembox-info-leo">
                    <h2>{this.state.website}</h2>
                    <p>${this.state.price} + {this.state.free_ship? "free shipping": this.state.ship_cost}</p>
                </div>
            </div>
        );
    }
}
