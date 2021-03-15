import React, { PropTypes, Component } from 'react';
import style from './Selector.css';

export default class Selector extends Component{
    static propTypes = {
        brand: PropTypes.string.isRequired
    };

    render() {
        return (
            <div>
                <div className={style.rectangle}></div>
                <p>{this.props.brand}</p>
            </div>
        )
    }
}
