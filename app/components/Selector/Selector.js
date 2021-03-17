import React, { PropTypes, Component } from 'react';
import style from './Selector.css';

export default class Selector extends Component{

    render() {
        return (
            <div>
                <div className={style.rectangle}></div>
                <p>{this.props.brand}</p>
            </div>
        )
    }
}
