import React from 'react'
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';

import Bts2 from './bts2.webp';
export default function Bts() 
{
    const [count,setCount] = useState(5);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>Angry fans demand apology from Korean writer over article on BTS. Can you guess why?</h1>
        <img src={Bts2} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        Fans pointed out that in an attempt to praise BTS, the writer belittled other K-pop idols and overlooked the growth of the K-pop industry even before BTS. Read to know more.
        Kpop fans are angry with a Korean writer after an article about BTS from The New Yorker went viral on the internet. Titled 'Joining the BTS Army', the write-up talked about the journey of superband BTS but did not give due credit to K-pop groups SHINee and BIGBANG which irked the netizens. The journalist Tammy Kim mentioned the unfortunate suicide of Kim Jonghyun, a member of SHINee, and that BTS participated in a UNICEF campaign to combat violence against children and teens. The article talked about many other K-pop idols but not in a good way.

Angry fans called out the journalist and claimed that Jonghyun was a much higher artist and deserved to be respected in the write-up. Soon after, 'Tammy Kim Apologise' started trending on social media. Fans pointed out that in an attempt to praise BTS, the writer belittled other K-pop idols and overlooked the growth of the K-pop industry even before BTS.

One Twitter user said, "First of all, Kim Jonghyun is much more than a suicide case. If you are going to write about him, then let it be about his legacy as an artist. It’s unnecessary to specifically correlate BTS’s UNICEF campaign to his passing." Another tweeted, "while jonghyun was using his platform to get korean laws changed, bring attention to israeli occupation, call out discrimination towards transgender people, you’re out here disrespecting him to get a few clicks."
        
            
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
<img src={Aut} alt='artrika' id='author'/><h3> India TV Entertainment Desk</h3>
        
        </p>
    </div>
  )
}
