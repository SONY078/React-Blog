import React from 'react'
import FlyY from './pexels-cottonbro-4323299.jpg';
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';
export default function FlyingYoga() {
  const [count,setCount] = useState(500);
  const handleClick = ()=>setCount(count+1);
  return (
    <div>
    <div id='tajmahal-containner'>
        <h1>Flying Yoga</h1>
        <img src={FlyY} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        Aerial yoga, also referred to as anti-gravity yoga, shares a lot 
        similarities with traditional yoga. However, there's a big difference.
         When participating in aerial yoga classes, the weight of your body will be supported by a hammock.
          This means you'll be suspended in the air! 
        It's a great option for beginners and experienced yoga performers.<br/>
        While everyone can benefit from aerial yoga classes, they're especially 
        great for people experiencing back pain. Because of the hammock's support, 
        far less pressure is placed upon your joints. Aerial yoga also doesn't 
        strain the spine, which is a huge advantage for back pain sufferers. 
        You'll be able to obtain a full body workout without any discomfort.
       
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
<img src={Aut} alt='artrika' id='author'/><h3>Fitness & Fitness </h3>
        </p>
    </div>
    </div>
  )
}
