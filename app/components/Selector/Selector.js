import React, { PropTypes, Component } from 'react';
import style from './Selector.css';

export default class Selector extends Component{

    render() {
        return (
            <div>
                <div className={style.rectangle}></div>
                <div className={style.text}>{this.props.brand}</div>
            </div>
        )
    }
}
