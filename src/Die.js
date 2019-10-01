import React, {Component} from 'react';
import './Die.css'

class Die extends Component{
    render(){
        let fasUrl = `fas fa-9x fa-dice-${this.props.rando}`;
        return(
            <div className="Die">
                <i className = {fasUrl}></i>
            </div>
        )
    }
}

export default Die;