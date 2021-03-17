import React, { PropTypes, Component } from 'react';
import input from "eslint-plugin-jsx-a11y/lib/util/implicitRoles/input";
import FilterStyle from "./FilterStyle.css"

export default class Filter extends Component {

    render() {
        return (
            <div className = {FilterStyle.mainfilterleo}>
                <h5 className = {FilterStyle.filterheader}>Size: </h5>
                <input type="text" placeholder="Enter size..." className = {FilterStyle.filterinput} />
            </div>
        );
    }
}
