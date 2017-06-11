import React, { Component } from "react";

export default class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            names: ["Ariel", "Kida", "Jasmine", "Merida", "Aurora"],
            userInput: "",
            filteredNames: []
        }
    }
    handleChange(val) {
        this.setState({userInput: val});
    }
    filterNames(userInput){
        var bob = this.state.names;
        var result = [];
        for(var i = 0; i < bob.length; i++){
            if(bob[i].includes(userInput)){
                result.push(bob[i]);
            }
        }
        this.setState({filteredNames: result});

    }
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: {JSON.stringify(this.state.names, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterNames(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredNames, null, 10)}</span>
            </div>
        )
    }
}