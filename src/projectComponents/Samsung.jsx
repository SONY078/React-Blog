import React from 'react'
import M52 from './m52.webp';
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';
export default function Samsung() {
  const [count,setCount] = useState(500);
  const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>Samsung Galaxy M52 5G Price in India Discounted by Rs. 9,000</h1>
        <img src={M52} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        Samsung Galaxy M52 5G price in India has dropped by over 30 percent under a limited period offer. 
        The Samsung phone was launched last year with a starting price of Rs. 29,999. The smartphone offers 
        features including a 120Hz Super AMOLED Plus display and triple rear cameras. The Samsung Galaxy M52 
        5G also comes with an octa-core Qualcomm Snapdragon 
        778G SoC. It competes with phones including the iQoo Z5 and Realme GT Master Edition.        
        <h2>Samsung Galaxy M52 5G specifications</h2>
        The dual-SIM (Nano) Samsung Galaxy M52 5G features a 6.7-inch full-HD+ (1,080x2,400 pixels) 
        Super AMOLED Plus display with a 20:9 aspect ratio and up to 120Hz refresh rate. The phone is 
        powered by the Snapdragon 778G SoC, along with up to 8GB of RAM. In terms of optics, the Galaxy 
        M52 5G carries the triple rear camera setup that houses a 64-megapixel primary sensor, along with a 
        12-megapixel wide-angle shooter and a 5-megapixel macro shooter.
        For selfies and video chats, the Samsung Galaxy M52 5G offers a 32-megapixel 
        selfie camera sensor at the front.
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
