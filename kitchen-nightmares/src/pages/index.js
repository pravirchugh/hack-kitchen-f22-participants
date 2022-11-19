import React, {useState} from 'react';
import GordonImg from './Gordon.jpg';
import Fanart1 from '../img/fanart1.png'
import Fanart2 from '../img/fanart2.jpeg'
import Fanart3 from '../img/fanart3.jpeg'
import Fanart4 from '../img/fanart4.jpeg'

import './index.css'

let expanded = false;

export default function Home() {

    const [expanded, setExpanded] = useState(false);
    const [buttonText, setButtonText] = useState("My fanart of him!")

    function handleClick(){
      setExpanded(!expanded);

      if(buttonText === "My fanart of him!"){
        setButtonText("Hide fanart.")
      } else {
        setButtonText("My fanart of him!");
      }
    }
    return (
        <>
            <h1>Welcome to Gordon Ramsey's fanpage!</h1>
            {/* <iframe width="1750" height="315" src="https://www.youtube.com/embed/rEMXENwQZA4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             */}
            <p style={{textAlign: "center"}}>Gordon is truly an inspiration figure. I admire his work ethic, his attitude, and his commitment to improvement. Plus, he makes me laugh! </p>
            
            <div id="first_part">
             <img src={GordonImg} alt="Gordon Ramsay"></img>
            </div>




            <div className="textAndButton">
                <div> 
                    <p>
                        Here's some fan-art of Gordon that I made!
                    </p>
                </div>
             <div>
                <button onClick={() => handleClick()} className="fanartButton">
                    {buttonText}
                </button>
             </div>
            </div>
            
           

            

            { expanded &&

                <div class="fanart_images">
                    <div class="fanart_row">
                        <img src={Fanart1} className="fanartimage" width="500px"></img>
                      <img src={Fanart2} className="fanartimage" width="500px"></img>
                    </div>
                    <div class="fanart_row">
                        <img src={Fanart3} className="fanartimage" width="500px"></img>
                       <img src={Fanart4} className="fanartimage" width="500px"></img>
                    </div>
                </div>


            }

           

            <section style={{textAlign: "left", marginLeft: "10px"}}>
                <h2>Note</h2>
                
            
                <li>I hope you liked the fanart! I had a lot of fun making it! :)</li>
                <li>I got to see a Kitchen Nightmares Restaurant last week! It was so much fun, 10/10 would recommend!</li>
                <li>My favorite recipe of his has got to be his <a href="https://www.gordonramsay.com/gr/recipes/appleberryjamfrenchtoast/">Michigan French Toast Sandwich</a>! It's so delicious and is my go-to for breakfast time! (You might catch me eating it elsewhere too!)</li>
            

                
            </section>
        </>
    );
};
