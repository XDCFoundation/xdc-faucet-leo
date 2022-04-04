import React, { useState } from "react";

function StarBadgeComponent(props){
    return (
        <div className="flex h-5 bg-red-50 rounded-md pl-1 pr-2 py-1">
            <div className="text-ft1 text-white relative bottom-0.5 mr-0.5">{props.numberOfStars}</div>
            <img src="/images/gold-star.svg" className="w-3"/>
        </div>
    )
}

export default StarBadgeComponent;
