import React, { useState } from "react";
import StarBadgeComponent from "./starBadge"

function TopGamesComponent(){
    return (
        <div className="p-8 md:pt-11.5 md:pb-19.25 md:px-0">
            <div className="w-full relative flex">
                <div className="text-ft6 md:text-ft8 text-black-50 mb-4 font-semibold">Top Games</div>
                <div className="absolute right-0 flex items-center">
                    <div>
                        <a className="text-ft4 text-blue-50 flex" href="">See all
                        <img src="/images/noun-next-arrow.svg" className="ml-3"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 2xl:grid-cols-6">
                <div>
                    <img src="/images/Mask-Group-3@2x.png" alt=""/>
                    <div className="flex mt-2 relative">
                        <div className="flex">
                            <div className="text-ft5 text-black-50 mr-2">Super Crossword</div>
                            <StarBadgeComponent numberOfStars={4.7}/>
                        </div>
                        <div className="absolute right-0 text-ft4 text-blue-50 font-semibold">$5.00</div>
                    </div>
                </div>
                <div>
                    <img src="/images/Mask-Group-4@2x.png" alt=""/>
                    <div className="flex mt-2 relative">
                        <div className="flex">
                            <div className="text-ft5 text-black-50 mr-2">Scratch and Win</div>
                            <StarBadgeComponent numberOfStars={4.6}/>
                        </div>
                        <div className="absolute right-0 text-ft4 text-blue-50 font-semibold">$2.00</div>
                    </div>
                </div>
                <div>
                    <img src="/images/Mask-Group-5@2x.png" alt=""/>
                    <div className="flex mt-2 relative">
                        <div className="flex">
                            <div className="text-ft5 text-black-50 mr-2">Diamond Lotto</div>
                            <StarBadgeComponent numberOfStars={4.2}/>
                        </div>
                        <div className="absolute right-0 text-ft4 text-blue-50 font-semibold">$10.00</div>
                    </div>
                </div>
                <div>
                    <img src="/images/Mask-Group-6@2x.png" alt=""/>
                    <div className="flex mt-2 relative">
                        <div className="flex">
                            <div className="text-ft5 text-black-50 mr-2">Royal Slots</div>
                            <StarBadgeComponent numberOfStars={4.1}/>
                        </div>
                        <div className="absolute right-0 text-ft4 text-blue-50 font-semibold">$4.00</div>
                    </div>
                </div>
                <div>
                    <img src="/images/Mask-Group-2@2x.png" alt=""/>
                    <div className="flex mt-2 relative">
                        <div className="flex">
                            <div className="text-ft5 text-black-50 mr-2">Big Win</div>
                            <StarBadgeComponent numberOfStars={4.1}/>
                        </div>
                        <div className="absolute right-0 text-ft4 text-blue-50 font-semibold">$5.00</div>
                    </div>
                </div>
                <div>
                    <img src="/images/Mask-Group-7@2x.png" alt=""/>
                    <div className="flex mt-2 relative">
                        <div className="flex">
                            <div className="text-ft5 text-black-50 mr-2">Lucky Hunt</div>
                            <StarBadgeComponent numberOfStars={4.0}/>
                        </div>
                        <div className="absolute right-0 text-ft4 text-blue-50 font-semibold">$6.00</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopGamesComponent;
