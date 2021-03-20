import React, { PropTypes, Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import style from './Selector.css';

export default class Selector extends Component{

    constructor(props) {
        super(props);
        this.state = {
          checked: false
        };
    }

    render() {
        return (
            <div style={{marginLeft: "52px"}}>
                <FormControlLabel
                    control={
                        <Checkbox
                            color='default'
                            style={{color: "#2FB31A"}}
                            onChange={()=>this.setState({checked: this.state.checked?false:true})}
                        />
                    }
                    label={<span className={style.text}>{this.props.brand}</span>}
                />
            </div>
        )
    }
}
