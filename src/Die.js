import React, {Component} from 'react';
import './Die.css'

class Die extends Component{
    render(){
        let fasUrl = `Die fas fa-dice-${this.props.rando}`;
        return(
            <div>
                <i className = {fasUrl}></i>
            </div>
        )
    }
}

export default Die;