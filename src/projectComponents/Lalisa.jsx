import React from 'react'
import Sh from './share.svg';
import Insta from './insta.png';
// import Aut from './Mask Group 15.png';
import Hera from './hera.jpg'
import { useState } from 'react';
import Mano from './lisa.jpg'
export default function Lalisa() 
{
    const [count,setCount] = useState(0);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>BLACKPINK’s Lisa’s “LALISA” Becomes Fastest Female K-Pop Solo MV To Hit 500 Million Views</h1>
        <img src={Mano} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        BLACKPINK’s Lisa has made YouTube history once again!
On June 25 at 5:06 a.m. KST, Lisa’s music video for her solo debut track “LALISA” 
surpassed 500 million views on YouTube, making it the fastest music video by a female 
K-pop soloist to achieve the feat. (Lisa previously hit the 500 million mark with her performance 
video for “MONEY” earlier this year, 
but “LALISA” is her first official music video to reach the milestone.)
Lisa originally released the music video for “LALISA” on September 10 at 1 p.m. KST, meaning that the song took just nine months, 14 days, 16 hours, and six minutes to reach the milestone.
Congratulations to Lisa on her new record!
Watch the stunning music video for “LALISA” again below
<a href='https://youtu.be/awkkyBH2zEo'>here!</a>
        
            
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
<img src={Hera} alt='artrika' id='author'/><h3>author - 박서연 기자</h3>
        
        </p>
    </div>
  )
}
