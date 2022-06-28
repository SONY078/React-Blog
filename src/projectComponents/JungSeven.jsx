import React from 'react'
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
import { useState } from 'react';
import Js from './ju.jpg';
export default function JungSeven() 
{
    const [count,setCount] = useState(3);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>BTS: Jungkook Attends Seventeen's Concert in Seoul to Support Friend Mingyu</h1>
        <img src={Js} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        K-pop band Seventeen has kicked off their Be The Sun World Tour with two shows in Seoul, 
        before heading out to other countries. A number of K-pop stars turned up for their 
        concert at the Gocheok Sky Dome in Seoul, including BTS member Jungkook. The youngest member 
        of BTS is good friends with Seventeen’s member Mingyu, and seems to have turned up to support his bestie.
        Seventeen made their debut in 2013, the same year as BTS, and Mingyu and Jungkook are both ’97 liners.
        Jungkook posted a video from Seventeen’s concert on his Instagram, confirming that he was at the concert. 
        He is said to have been joined by another friend, Eunwoo, from the band ASTRO. Fans have been excitedly 
        sharing photos of Jungkook watching the concert from behind a glass enclosure.

        
            
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
<img src={Aut} alt='artrika' id='author'/><h3>author - jhonny</h3>
        
        </p>
    </div>
  )
}
