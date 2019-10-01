import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
    static defaultProps = {
        diceNum: [
            { num: 'one' },
            { num: 'two' },
            { num: 'three' },
            { num: 'four' },
            { num: 'five' },
            { num: 'six' },
        ]}
render(){
    let randNum = Math.floor(Math.random()*6);
    let randDie = this.props.diceNum[randNum];
    return (
        <Die rando={randDie.num}/>
    )
}
}

export default RollDice;