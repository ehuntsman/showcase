import React, { Component } from "react";

export default class EvenAndOdd extends Component {
    constructor(){
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: "",
        }
    }
    handleChange(val){
        this.setState({
            userInput: val
        })
    }
    assignEvenAndOdds(userInput){
        var cake = userInput.split(",");
        var even = [];
        var odd = [];
        for(var i = 0;i < cake.length; i++){
            if(cake[i]%2 === 0){
                even.push(+cake[i]);
            }else{
                odd.push(+cake[i]);
            }
        };
        this.setState({
            evenArray: even,
            oddArray: odd,
        });
    }
    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange = {(e)=> this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick = {() => {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
                <span className="resultsBox"> Evens: {this.state.evenArray}</span>
                <span className="resultsBox">Odds: {this.state.oddArray}</span>
            </div>
        )
    }
}