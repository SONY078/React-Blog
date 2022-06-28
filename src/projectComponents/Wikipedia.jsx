import React from 'react'
import Wiki from './wiki.webp';
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';
export default function Wikipedia() {
  const [count,setCount] = useState(500);
  const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>Google Agrees to Pay for Wikipedia Content Displayed on Search Engine</h1>
        <img src={Wiki} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        Google has agreed to pay Wikipedia for content displayed by its search engine, mirroring deals 
        the US tech giant has struck with news outlets in Europe.
        The Wikimedia Foundation, the charity that oversees the online encyclopedia,
        said Google was the first paying customer for its commercial venture Wikimedia
        Enterprise, which it launched last year.
        The Internet Archive, a non-profit that runs a site called the Wayback Machine
        that saves snapshots of websites and is used to fix Wikipedia links, will be offered
        the commercial services for free.
        Wikipedia, one of the world's most visited websites, is free to use, updated by volunteers
        and relies on donations to keep afloat.
        The new commercial arm will not change that arrangement for individual users, the foundation said.
        Google uses material from the site for its "knowledge panel" — a sidebar that accompanies the main
        search results.
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
