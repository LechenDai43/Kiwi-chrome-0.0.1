import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import Header from "../../components/Header/Header";
import Selector from "../../components/Selector/Selector";
import SelectionPageStyle from "./SelectionPageStyle.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

@connect()
export default class SelectionPage extends Component {
    constructor(props) {
        super(props);
    }

    populateStore() {
        return (
            <Selector/>
        );
    }

    render() {
       return (
            <div className= {SelectionPageStyle.selectionpagebodyleo}>
                <div className= {SelectionPageStyle.selectionheaderpart}>
                    <Header/>
                    <AccountCircleIcon/>
                </div>
                <h6 className={SelectionPageStyle.selectioninstruction}>Select your favorite stores</h6>
                <hr/>
                <div className={SelectionPageStyle.selectionselectorlist}>
                    {this.populateStore()}
                </div>
                <div className={SelectionPageStyle.selectionfooter}>
                    <hr/>
                    <button className={SelectionPageStyle.selectionfinishbutton} onClick={() => {this.props.redirection()}}>Finish</button>
                </div>
            </div>
        );
    }
}
