import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        diceNum: [
            { num: 'one' },
            { num: 'two' },
            { num: 'three' },
            { num: 'four' },
            { num: 'five' },
            { num: 'six' },
        ]
    }
    constructor(props) {
        super(props);
        this.state = { randNum: 'one' };
        this.roll = this.roll.bind(this);
    }
    roll(e) {
        let randNum = this.props.diceNum[Math.floor(Math.random() * 6)].num;
        this.setState({randNum :randNum});
    }
    render() {
        
        return (
            <div className="RollDice">
                <div className="RollDice-die">
                    <Die rando={this.state.randNum} />
                    <Die rando={this.state.randNum} />
                </div>
                <button className="btn btn-default btn-lg" onClick={this.roll}>Roll Dice!</button>
            </div>

        )
    }
}

export default RollDice;