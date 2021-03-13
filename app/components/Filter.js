import React, { PropTypes, Component } from 'react';
import input from "eslint-plugin-jsx-a11y/lib/util/implicitRoles/input";

export default class Filter extends Component {

    render() {
        return (
            <div classNames="main-filter-leo">
                <h3>Size Filter</h3>
                <input type="text" placeholder="Enter size..."/>
            </div>
        );
    }
}