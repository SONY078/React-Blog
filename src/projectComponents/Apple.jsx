import React from 'react'
import Apl from './Apple.webp';
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';
export default function Apple() {
  const [count,setCount] = useState(500);
  const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>For lot of Indians, iPhone stops charging at 80 per cent, and here is the reason</h1>
        <img src={Apl} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        If your iPhone stopped charging beyond 80 per cent this year, it is likely the high temperature
         is the cause of the issue. Apple limits charging beyond a certain level to prevent overheating.
        If you're staying in Delhi or parts of Northern India, it is possible that your
          iPhone may have flashed a heating warning this year. It is also possible that 
          your iPhone may have stopped charging to 100 per cent capacity on days when the
           temperature outside was over 40 degrees. If you have experienced this battery issue,
            Apple explains that its software tweaks stop the charging process to preserve the unit.
             In a post titled, 'If your iPhone, iPad, or iPod touch gets too hot or too cold',
        the company explained some dos and don'ts to extend the iPhone's battery life.
        <h2>HIGHLIGHTS</h2>
         <ul>
            <li>Using an iPhone in very hot conditions can permanently shorten battery life.</li>
            <li>Users can check the battery health by going to the battery option in Settings.</li>
            <li>Users must also check if they have enabled the 'Optimised Battery Charging' feature.</li>
         </ul>
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
<img src={Aut} alt='artrika' id='author'/><h3>Tech guru</h3>
        </p>
    </div>
  )
}
