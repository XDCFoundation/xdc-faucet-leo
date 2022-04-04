import React, { useState } from "react";

function Header(){
    return (
        <div className="hidden md:flex pt-8 pb-9 relative">
            <div className="margin-right-12vw">
                <img src="/images/Logo-Color.svg"/>
            </div>

            <div className="flex margin-right-6vw">
                <a href="" className="text-ft3 text-darkGrey font-PoppinsSemiBold margin-right-2vw">PLAY</a>
                <a href="" className="text-ft3 text-darkGrey font-PoppinsSemiBold margin-right-2vw">SPONSOR</a>
                <a href="" className="text-ft3 text-darkGrey font-PoppinsSemiBold margin-right-2vw">DISTRIBUTE</a>
                <a href="" className="text-ft3 text-darkGrey font-PoppinsSemiBold margin-right-2vw">RETAIL</a>
                <a href="" className="text-ft3 text-darkGrey font-PoppinsSemiBold">COMMUNITY</a>
            </div>

            <div className="flex absolute right-0">
                <button className="text-ft3 font-PoppinsSemiBold text-red-50 border rounded-3xl border-red-50 w-45 margin-right-half-vw py-2">CREATE GAME</button>
                <button className="text-ft3 font-PoppinsSemiBold bg-blue-50 text-white rounded-3xl w-45 py-2">CONNECT WALLET</button>
            </div>
        </div>
    )
}

export default Header;
