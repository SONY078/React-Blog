import React from 'react'
import Sh from './share.svg';
import Insta from './insta.png';
// import Aut from './Mask Group 15.png';
import Faut from './author.png';
import { useState } from 'react';

import Bt from './bts.webp';
export default function BTS() 
{
    const [count,setCount] = useState(5);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>K-pop band BTS is caught between South Korea’s soft power ambitions and national security</h1>
        <img src={Bt} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        Some members of the world’s biggest K-pop group will soon be fulfilling their military service duties.
        The decision by K-pop sensations, BTS, to take a hiatus is breaking hearts globally. But, unlike the Beatles or One Direction, their decision is tied to Korean peninsula politics and the challenge of balancing national security and South Korea’s soft power ambitions.
        The seven members of BTS broke the news during their annual dinner, which was streamed live to fans worldwide on June 15, citing exhaustion and a desire to pursue solo projects. Some confusion arose afterwards when, in a bid to slow their tumbling stock price, the band’s entertainment company, 
        Hybe, said BTS would continue to work both together and individually.
        However, discerning fans suspect the decision is more calculated than suggested, speculating that some BTS members will soon be fulfilling their military service duties. The split comes just weeks after an intense political debate in South Korea 
        over whether the group’s members should be exempt from South Korea’s compulsory military service requirement.

        
            
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
<img src={Faut} alt='artrika' id='author'/><h3>Sarah A Son</h3>
        
        </p>
    </div>
  )
}
