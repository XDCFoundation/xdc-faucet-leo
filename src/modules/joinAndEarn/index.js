import React from "react";
import BaseComponent from "../baseComponent";
import JoinAndEarnComponent from "./joinAndEarnComponent";

class JoinAndEarn extends BaseComponent{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){

    }

    render(){
        return (
            <JoinAndEarnComponent/>
        )
    }

}

export default JoinAndEarn
