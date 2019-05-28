import React, { Component } from 'react';
import RollDice from "./RollDice";
import './Die.css';

class Die extends Component{
    constructor(props){
        super(props);
    }



    render(){  

        let str = "fas fa-dice-";
        let comStr = (this.props.dice[this.props.dice1].diceNum).toString();
        let classStr = str + comStr + " fa-5x";
        let comStr2 = (this.props.dice[this.props.dice2].diceNum).toString();
        let classStr2 = str + comStr2 + " fa-5x";
        return (
        <div>       
            <i id ="dice" className={classStr}></i>
            <i id = "dice" className={classStr2}></i>
        </div>
        )
    }
}


export default Die;