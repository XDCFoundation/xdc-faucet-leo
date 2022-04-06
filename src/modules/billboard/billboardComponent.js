import React, { useState } from "react";

function BillboardComponent(){
    return (
        <div className="apply-example px-12 py-20 md:pl-35 md:pt-36.5 md:pr-18.5 md:pb-25.5 ">
            <div>
                <div className="text-ft8 md:text-ft11 text-black-50 md:text-red-50 text-center md:text-left font-PoppinsBold">Decentralized lottery</div>
                <div className="text-ft5 md:text-ft9 text-black-50 text-center md:text-left font-PoppinsBold">for the people, by the people</div>
                <div className="text-ft4 md:text-ft6 text-black-50 mt-6 md:mt-10 text-center md:text-left max-width-674px font-PoppinsBold">Lottery of the People is a distributed system which allows anyone to create, distribute, buy or sell digital NFT lottery tickets.</div>
                <div className="flex justify-center md:justify-start">
                    <button className="bg-red-50 text-white w-65 h-11 text-ft3 font-semibold rounded-3xl mt-15 font-PoppinsMedium">PLAY AND EARN</button>
                </div>
            </div>
            <div>
                <img src="/images/Group-679.svg" className="md:mt-0 mt-12" alt = ""/>
            </div>

        </div>
    )
}

export default BillboardComponent;
