import React, { useState } from "react";
import Billboard from '../billboard/index'
import TopGames from '../topGames/index'
import TotalMoneyEarned from '../totalMoneyEarned/index'
import JoinAndEarn from '../joinAndEarn/index'
import HowLotteryWorks from '../howLotteryWorks/index'
import Header from "../header/header";

function MainComponent(){
    return (
        <div className="global-container flex justify-center">
            <div className="max-width-1640px">
                <Header/>
                <Billboard/>
                <TopGames/>
                <TotalMoneyEarned/>
                <JoinAndEarn/>
                <HowLotteryWorks/>
            </div>
        </div>
    )
}

export default MainComponent;
