import React from "react";
import BaseComponent from "../baseComponent";
import MainComponent from "./mainComponent";

class Main extends BaseComponent{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    componentDidMount(){

    }

    render(){
        return (
            <MainComponent/>
        )
    }

}

export default Main
