import React, { useState } from "react";

function HowLotteryWorksComponent(){
    return (
        <div className="mb-20">
            <div className="md:text-ft8 text-ft6 text-black-50 font-semibold mb-10 text-center md:text-left">How Lottery of the People works</div>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                <div className="flex justify-center">
                    <div>
                        <div className="flex justify-center"><img src="/images/Group-687.svg"/></div>
                        <div className="text-center mt-9 text-ft6 text-black-50 font-semibold">Step 1</div>
                        <div className="text-center max-width-243 mt-4 text-ft5 text-black-50 ">Game designer creates a game and posts it for Sponsorship</div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div>
                        <div className="flex justify-center"><img src="/images/Group-687.svg"/></div>
                        <div className="text-center mt-9 text-ft6 text-black-50 font-semibold">Step 2</div>
                        <div className="text-center max-width-243 mt-4 text-ft5 text-black-50 ">Distributor signs up Retailers</div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div>
                        <div className="flex justify-center"><img src="/images/Group-687.svg"/></div>
                        <div className="text-center mt-9 text-ft6 text-black-50 font-semibold">Step 3</div>
                        <div className="text-center max-width-243 mt-4 text-ft5 text-black-50 ">Retailer sells tickets and games to Customers</div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div>
                        <div className="flex justify-center"><img src="/images/Group-687.svg"/></div>
                        <div className="text-center mt-9 text-ft6 text-black-50 font-semibold">Step 4</div>
                        <div className="text-center max-width-243 mt-4 text-ft5 text-black-50 ">Retailer sells tickets and games to Customers</div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div>
                        <div className="flex justify-center"><img src="/images/Group-687.svg"/></div>
                        <div className="text-center mt-9 text-ft6 text-black-50 font-semibold">Step 5</div>
                        <div className="text-center max-width-243 mt-4 text-ft5 text-black-50 ">Customer selects a game to play and makes payment in crypto or cash to the Retailer</div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div>
                        <div className="flex justify-center"><img src="/images/Group-687.svg"/></div>
                        <div className="text-center mt-9 text-ft6 text-black-50 font-semibold">Step 6</div>
                        <div className="text-center max-width-243 mt-4 text-ft5 text-black-50 ">Everyone involved in the sale, get the commission and the winner gets the prize.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowLotteryWorksComponent;
