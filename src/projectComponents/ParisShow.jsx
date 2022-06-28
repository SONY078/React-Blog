import React from 'react'
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import Lvbo from './92489237.webp';
import { useState } from 'react';

import LVB from './lisavb.jpg';
export default function ParisShow() 
{
    const [count,setCount] = useState(15);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>V, Lisa and Park Bo-gum steal the show at Paris Fashion Week - WATCH</h1>
        <img src={LVB} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        South Korean star Park Bo-gum, Lisa from K-pop girl group Blackpink and V aka Kim Tae-hyung, 
        the singer and songwriter of BTS had all eyes on them when they arrived in style for the Celine 
        show at Paris Fashion Week.
        Dressed to impress in leather, dazzling statement jewellery and sequin, the Korean stars had fans swarming 
        the surrounding streets, hoping to catch a glimpse of the bunch who are also ambassadors of the label.
        <br/><br/>
        <img src={Lvbo} alt='Taj Mahal' id='paris'/>
            <br/><br/>
            <br/><br/><br/>
<h3 id='counter'>{count}</h3>
<div id="share">
<div id="shareIcon">
<img src={Sh} alt='share'/>
</div>
<button onClick={handleClick} id='like'><i class="fa-solid fa-thumbs-up"></i></button>
<a href='http://www.facebook.com/sharer/sharer.php?u=https://www.analyticsinsight.net/python-is-no-more-overrated-thanks-to-python-3-11/'><i class="fa-brands fa-facebook"></i></a>
<a href='https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fwww.analyticsinsight.net%2Fpython-is-no-more-overrated-thanks-to-python-3-11%2F&source=tweetbutton&text=Python%20is%20No%20More%20Overrated,%20Thanks%20to%20Python%203.11&url=https%3A%2F%2Fwww.analyticsinsight.net%2Fpython-is-no-more-overrated-thanks-to-python-3-11%2F&via=https://twitter.com/analyticsinme'><i class="fa-brands fa-twitter"></i></a>
<a href='https://plus.google.com/share?url=https://www.analyticsinsight.net/python-is-no-more-overrated-thanks-to-python-3-11/'><i class="fa-brands fa-linkedin"></i></a>
<a href='http://pinterest.com/pin/create/button/?url=https://www.analyticsinsight.net/python-is-no-more-overrated-thanks-to-python-3-11/&media=https://www.analyticsinsight.net/wp-content/uploads/2022/06/Python-is-no-more-overrated-Thanks-to-Python-3.jpg&description=Python%20is%20No%20More%20Overrated,%20Thanks%20to%20Python%203.11'><i class="fa-brands fa-pinterest"></i></a>
<a href='https://www.instagram.com/accounts/emailsignup/'><img src={Insta} alt='insta' id='insta'/></a>

<br/><br/><br/>
</div>
<img src={Aut} alt='artrika' id='author'/><h3> TNN & Agencies</h3>
        
        </p>
    </div>
  )
}
