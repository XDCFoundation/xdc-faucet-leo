import React from "react";
import BaseComponent from "../baseComponent";
import HowLotteryWorksComponent from "./howLotteryWorksComponent";

class HowLotteryWorks extends BaseComponent{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){

    }

    render(){
        return (
            <HowLotteryWorksComponent/>
        )
    }

}

export default HowLotteryWorks
