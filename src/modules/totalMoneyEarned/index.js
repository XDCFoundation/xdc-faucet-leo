import React from "react";
import BaseComponent from "../baseComponent";
import TotalMoneyEarnedComponent from "./totalMoneyEarnedComponent";

class TotalMoneyEarned extends BaseComponent{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){

    }

    render(){
        return (
            <TotalMoneyEarnedComponent/>
        )
    }

}

export default TotalMoneyEarned
