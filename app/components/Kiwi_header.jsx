import React, { PropTypes, Component } from 'react';

export default class Kiwi_header extends Component{
    state = {};

    styles = {
        width: 58,
        height: 38,
        fontFamily: Yinmar,
        fontStyle: normal,
        fontWeight: normal,
        fontSize: 30,
        lineHeight: 38,
        color: '#2FB31A'
    };

    render() {
        return (
        <div>
        <span style={this.styles}>Kiwi</span>
        </div>
        );
    }
}