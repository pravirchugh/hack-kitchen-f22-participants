import React from "react";

import img from "../img/fanart3.jpeg";
import './awards.css'

export default function Awards() {
    return (
        <>
        <h1>Awards</h1>
            <div className="wrapper">
                <div className="list">
                    <ul>
                        <li>
                            Gordon Ramsay's London Restaurant was voted as the top restaurant in the UK! Plus, it has 3 Michelin Stars! ⭐
                        
                        </li>
                        <li>
                            Officer of the Order of the British Empire.
                        </li>
                        <li>
                            Guinness World Record holder for the fast time to <a target="_blank" href="https://www.youtube.com/watch?v=sVT9sotjycM&ab_channel=TheFWord">filet a fish!</a>
                        </li>

                
                    
                        <li>
                            Guinesses World Record holder for the <a target="_blank" href="https://www.youtube.com/watch?v=aRc_ArRoSzE&ab_channel=TheFWord">longest pasta sheet rolled in 60 seconds</a> (1.45 meters)!
                        </li>
                    
                    </ul>
            
                </div>
                <img src={img}/>
            </div>
        </>
    );
};