import React from "react";
import BaseComponent from "../baseComponent";
import TopGamesComponent from "./topGamesComponent";

class TopGames extends BaseComponent{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){

    }

    render(){
        return (
            <TopGamesComponent/>
        )
    }

}

export default TopGames
