import React, { useState } from "react";

function TotalMoneyEarnedComponent(){
    return (
        <div className="w-full px-8 md:px-0">
            <div className="text-ft8 text-black-50 font-semibold text-center md:text-left">Total Money Earned till date</div>
            <div className="mt-10 grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-8">
                    <div>
                        <div className="text-ft6 text-black-50 font-semibold text-center">Won by Game Players</div>
                        <div className="mt-3 text-ft9 text-black-50 font-semibold text-center">$45,485</div>
                    </div>
                    <div>
                        <div className="text-ft6 text-black-50 font-semibold text-center">Won by Game Players</div>
                        <div className="mt-3 text-ft9 text-black-50 font-semibold text-center">$45,485</div>
                    </div>
                    <div>
                        <div className="text-ft6 text-black-50 font-semibold text-center">Won by Game Players</div>
                        <div className="mt-3 text-ft9 text-black-50 font-semibold text-center">$45,485</div>
                    </div>
                    <div>
                        <div className="text-ft6 text-black-50 font-semibold text-center">Won by Game Players</div>
                        <div className="mt-3 text-ft9 text-black-50 font-semibold text-center">$45,485</div>
                    </div>
                    <div>
                        <div className="text-ft6 text-black-50 font-semibold text-center">Won by Game Players</div>
                        <div className="mt-3 text-ft9 text-black-50 font-semibold text-center">$45,485</div>
                    </div>
            </div>
        </div>
    )
}

export default TotalMoneyEarnedComponent;
