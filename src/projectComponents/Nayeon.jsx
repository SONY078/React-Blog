import React from 'react'
import Nay from './NAYEON.jpg';
import Seo from './seon.jpg';
import Sh from './share.svg';
import Insta from './insta.png';
// import Aut from './Mask Group 15.png';
import { useState } from 'react';

function Nayeon() 
{
    const [count,setCount] = useState(0);
    const handleClick = ()=>setCount(count+1);
    return (
    <div>
        <h1>TWICE's Nayeon becomes the first female soloist to create a record-breaking pre-order inventory</h1>
        <img src={Nay} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
       TWICE’s Nayeon has racked up over half a 
            million stock pre-orders for her long-awaited solo debut album!
            Ahead of Nayeon’s solo debut on June 24, JYP Entertainment officially announced that as of June 23, 
            her upcoming mini album “IM NAYEON” had surpassed 500,000 stock pre-orders—marking the highest number 
            of stock pre-orders achieved by any female soloist this year.
            The number of stock pre-orders is the amount of album stock that is produced prior 
            to an album’s release. The figure is the estimated demand calculated using various factors, 
            including how many albums were pre-ordered by fans.
            Nayeon’s solo debut mini album “IM NAYEON”—a play on words referencing her full name “Im Nayeon” and the phrase “I’m Nayeon”—will drop on June 24 at 1 p.m. KST.
            In addition to premiering her new title track “POP!” on music shows (starting with KBS’s 
            “Music Bank” on June 24), Nayeon will also be performing the song on MTV’s “Fresh Out Live” on June 24 
            at 5 p.m. ET.
            Check out Nayeon’s latest teasers for her highly-anticipated 
            solo debut <a href='https://youtu.be/f6YDKF0LVWw'>here!</a>
        
            
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
<img src={Seo} alt='artrika' id='author'/><h3>author - 선미경 기자</h3>
        
        </p>
    </div>
  )
}

export default Nayeon