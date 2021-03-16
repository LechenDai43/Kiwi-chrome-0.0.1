import React, { PropTypes, Component } from 'react';
import style from './Header.css';


export default class header extends Component{
    state = {};

    render() {
        return (
        <div className={style.header}>
        <span>Kiwi</span>
        </div>
        );
    }
}
