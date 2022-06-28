import React from 'react'
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';

import Er from './eric.jpg'
export default function EricNam() 
{
    const [count,setCount] = useState(50);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>Eric Nam cancels Czech Republic concerts due to lost voice</h1>
        <img src={Er} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        Korean-American singer and entrepreneur Eric Nam had to cancel his latest leg of concerts in the Czech Republic owing to vocal sickness. He took to his Instagram handle, where he posted a couple of stories announcing that he had to, unfortunately, cancel the upcoming concerts due to threat of permanent damage to his voice. Acknowledging the request of fans who had already started lining up to attend the event, he further announced that they’ll hold an on-location merchandise sale.
        He shared a message for the fans on his Instagram page which read, "Dear Czech Nam Nation! Unfortunately due to losing my voice I've been instructed by my team and doctors to not perform at tonight's show. I wanted to push through but performing tonight could cause permanent damage to my voice. I have been put on vocal rest since yesterday and hope to pull through for the remaining tour dates.

I know that so many of you have awaited this day and am so sorry to disappoint you all. This is not an easy call to make but || truly appreciate your understanding and apologize for any inconvenience this causes. I hope to be able to make it up to you in the future.
Refunds for all tickets will be made wherever you purchased your tickets. Thank you again and I love you all so much."
Eric Nam is currently on his ‘There And Back Again’ tour. He is slated to perform in Berlin, Paris and Amsterdam this month, too. It will be interesting to see if the loss of his voice will affect his upcoming concerts as well.

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
<img src={Aut} alt='artrika' id='author'/><h3>  ETimes</h3>
        
        </p>
    </div>
  )
}
