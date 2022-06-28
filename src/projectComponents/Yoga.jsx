import React from 'react'
import Yog from './yoga.jpg';
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';
export default function Yoga() {
  const [count,setCount] = useState(500);
  const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>Yoga</h1>
        <img src={Yog} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        One of the main reasons yoga helps us create better mental health is that it integrates body and mind, 
        although it also works well when incorporated with talking therapy and meditation.
        'It's a bit of paradox - yoga looks like it's surface level but works deeply,
        ' says Toni Roberts, a yoga therapist specialising in mental health issues. 
        'For everyone, particularly people who find it difficult or too scary to sit 
        and look at their own mind, yoga can be a gateway to helping understand what 
        they need physically mentally and emotionally. The continued focus on the breath
         brings yogis into the present moment and instigates a parasympathetic response from
          our nervous systems (responsible for 'rest and digest' and helping us calm down).'
        These days there are many types of yoga and all contain the fundamental belief that
         we must balance our yin and yang (our more gentle and forceful energies) and work
          with our bodies to create holistic health and wellbeing
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
