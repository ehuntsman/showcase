import React, { Component } from 'react';

export default class FilterObject extends Component {

    constructor() {
        super();
        this.state = {
            employees: [
                {
                    name: "Star Butterfly",
                    title: "Princess",
                    age: 16,
                },
                {
                    name: "Marco Dias",
                    age: 16,
                    hairColor: "brown",
                },
                {
                    name: "Ludo",
                    title: "Ludo",
                }
            ],
            userInput: "",
            filteredEmployees: []
        }
    }
    handleChange(val) {
        this.setState({userInput: val});
    }
    filterEmployees(prop) {
        var employees = this.state.employees;
        var expendible = [];
        
        for ( var i = 0; i < employees.length; i++ ) {
            if ( employees[i].hasOwnProperty(prop) ) {
                expendible.push([employees[i].name, employees[i][prop]]);
            }
        }

        this.setState({ filteredEmployees: expendible });
    }
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.employees, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) }</span>
            </div>
        )
    }
}