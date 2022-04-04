import React from "react";
import BaseComponent from "../baseComponent";
import BillboardComponent from "./billboardComponent";

class BillBoard extends BaseComponent{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){

    }

    render(){
        return (
            <BillboardComponent/>
        )
    }

}

export default BillBoard
