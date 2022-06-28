import React from 'react'
import Med from './medi.jpg';
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';
export default function Meditation() {
  const [count,setCount] = useState(500);
  const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>Meditation</h1>
        <img src={Med} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        Meditation has been practiced for thousands of years. Meditation originally was meant to help
        deepen understanding of the sacred and mystical forces of life. These days, meditation is commonly
        used for relaxation and stress reduction.
        Meditation is considered a type of mind-body complementary medicine. Meditation can produce a deep 
        state of relaxation and a tranquil mind.
        During meditation, you focus your attention and eliminate the stream of jumbled thoughts 
        that may be crowding your mind and causing stress. This process may result in enhanced physical
         and emotional well-being.
         <h2>Benefits of meditation</h2>
        <p>Meditation can give you a sense of calm, peace and balance that can benefit both
        your emotional well-being and your overall health. You can also use it to relax and
        cope with stress by refocusing your attention on something calming. Meditation can
        help you learn to stay centered and keep inner peace.
        And these benefits don't end when your meditation session ends. Meditation can help
         carry you more calmly through your day. And meditation may help you manage symptoms
          of certain medical conditions.</p>
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
<img src={Aut} alt='artrika' id='author'/><h3>Fitness & Fitness</h3>
        </p>
        
    </div>
  )
}
