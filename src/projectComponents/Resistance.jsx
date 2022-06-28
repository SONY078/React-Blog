import React from 'react'
import Res from './resistance.jpg';
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';
export default function Resistance() {
  const [count,setCount] = useState(500);
  const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>Resistance Training</h1>
        <img src={Res} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        Lifting weights or bodyweight exercises can have a huge impact on how you feel and look;
        building muscle and self-esteem as well as curbing anxiety.
        Recent research shows that low-moderate intensity resistance training produces a reliable
        and robust decreases in anxiety, but there's also evidence to show it helps improve cognition
        and may improve the functioning of your central nervous system (which has a big impact on mood
        and fatigue levels).
        Karen Tippett took up resistance training sessions in Kent - working with kettlebells and her 
        bodyweight to perform - when her father was diagnosed with terminal cancer. 'It was a time where
        it was necessary to keep going, keep focused and stay composed when I felt (and was) powerless 
        and was constantly anxious,' she says.
        'Using kettlebells with a trainer made me feel physically strong and this helped me to be emotionally
        present and grateful for the time left with Dad. As I could feel my physical strength increase, I became
        bolder mentally throughout the cancer journey. Since we lost Dad the Kettlebells classes have provided 
        an amazing support from the ladies in the class
        and left me with a (safe) exhaustion level that has switched my mind and thoughts off enough for me to 
        sleep.'
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
