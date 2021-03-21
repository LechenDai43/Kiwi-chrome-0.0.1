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
        var operation = this.state.checked? -1: 1;
        this.props.handler(this.props.brand, operation);
    }

    render() {
        return (
            <div style={{marginLeft: "52px"}}>
                <FormControlLabel
                    control={
                        <Checkbox
                            color='default'
                            style={{color: "#2FB31A"}}
                            onChange={()=> this.handleChecking()}
                        />
                    }
                    label={<span className={style.text}>{this.props.brand}</span>}
                />
            </div>
        )
    }
}
