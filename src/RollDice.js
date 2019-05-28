import React, { Component } from 'react';
import Die from "./Die";

class RollDice extends Component{
    constructor(props){
        super(props);
        this.state = {num: 1 , num1: 4};
        this.getRandom = this.getRandom.bind(this);
    }

    static defaultProps = {
        dice:  [
             {diceNum: "one"},
             {diceNum: "two"},
             {diceNum: "three"},
             {diceNum: "four"},
             {diceNum: "five"},
             {diceNum: "six"},
           ]
     };
     
     getRandom(){
        let rand = Math.floor(Math.random() * 6) + 0;
        let rand2 = Math.floor(Math.random() * 6) + 0;
        //update staet with new random
        this.setState({num: rand, num1: rand2});
        
    }

    render(){    
        let roll = [...this.props.dice];
        let reroll1 = this.state.num;
        let reroll2 = this.state.num1;       
        return(
            <div> 
            <Die dice={roll} dice1 = {reroll1} dice2 = {reroll2} />

            <button className="editButton"onClick={this.getRandom}>Roll Dice</button>           
            </div>
        )
    }
}


export default RollDice;