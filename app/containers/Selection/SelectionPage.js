import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import Header from "../../components/Header/Header";
import Selector from "../../components/Selector/Selector";
import SelectionPageStyle from "./SelectionPageStyle.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



const fakeData = ['Farfetch', 'SSense', 'END.', 'Saks Fifth Avenue', 'Neiman Marcus'];

@connect()
export default class SelectionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked_list: []
        }
    }

    populateStore() {
        let list = [];
        for (let i = 0; i < fakeData.length; i++) {
            let newLen = list.push((<Selector brand={fakeData[i]} handler={(v, o) => this.updateList(v, o)} className= {SelectionPageStyle.selectionitem}/>))
            if (i < fakeData.length - 1) {
                newLen = list.push((<hr/>));
            }
        }
        return list;
    }

    updateList (value, operation) {
        let new_list = [];
        let found = 0;
        for (let i = 0; i < this.state.checked_list.length; i++) {
            if (value === this.state.checked_list[i] ) {
                if (operation === -1) {
                    continue
                }
                else {
                    found = 1;
                }
            }
            new_list.push(this.state.checked_list[i]);
        }
        if (found === 0 && operation === 1) {
            new_list.push(value);
        }
        this.setState({checked_list: new_list});
    }

    handleFinish () {
        this.props.redirection(this.state.checked_list);
    }

    render() {
       return (
            <div className= {SelectionPageStyle.selectionpagebodyleo}>
                <div className= {SelectionPageStyle.selectionheaderpart}>
                    <Header/>
                    <AccountCircleIcon className= {SelectionPageStyle.selectionpageaccount}/>
                </div>
                <h6 className={SelectionPageStyle.selectioninstruction}>Select your favorite stores</h6>
                <hr/>
                <div className={SelectionPageStyle.selectionselectorlist}>
                    {this.populateStore()}
                </div>
                <div className={SelectionPageStyle.selectionfooter}>
                    <hr/>
                    <button className={SelectionPageStyle.selectionfinishbutton} onClick={() => {this.handleFinish()}}>Finish</button>
                </div>
            </div>
        );
    }
}
