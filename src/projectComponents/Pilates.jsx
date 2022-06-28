import React from 'react'
import Pil from './pilates.jpg';
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';
export default function Pilates() {
  const [count,setCount] = useState(500);
  const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>Pilates</h1>
        <img src={Pil} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        The mental health benefits of Pilates often get overlooked because of the traditional 
        focus on Pilates for back health and core strength.
        'Joseph Pilates (Pilates' founder), believed so strongly in the connection between physical
        and mental health, he originally called his system of exercise 'Controlology', ie the control 
        of the body with the mind,' says Karen Laing, a Pilates Instructor who has battled anxiety.
        'Learning the skill of Pilates and focusing on technique and how your body feels while in a 
        class is a very mindful activity,' she says. 'Pilates is brilliant for stress reduction and 
        relaxation and great for Alpha types since there's no competitive element! Aside from the feelings
        of wellbeing from moving and mobilising your body, its focus on breathing and relaxation can help
        to switch on 
        the body's parasympathetic nervous system, which is responsible for sleep and relaxation.'
        
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
<img src={Aut} alt='artrika' id='author'/><h3>Fitness & Fitness </h3>
        </p>
    </div>
  )
}
