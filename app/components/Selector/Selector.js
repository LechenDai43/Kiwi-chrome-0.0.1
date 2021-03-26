import React, { PropTypes, Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import style from './Selector.css';

export default class Selector extends Component {
    constructor(props) {
        super(props);
        this.state = {
          checked: false
        };
    }

    handleChecking () {
        this.setState({checked: this.state.checked?false:true});
        let operation = this.state.checked? -1: 1;
        this.props.handler(this.props.brand, operation);
    }

    render() {
        return (
            <div className={style.selectionitem}>
                <FormControlLabel
                    control={
                        <Checkbox
                            color='default'
                            style={{color: "#2FB31A"}}
                            onChange={()=> this.handleChecking()}
                        />
                    }
                    label={<h6 className={style.text}>{this.props.brand}</h6>}
                />
            </div>
        )
    }
}
