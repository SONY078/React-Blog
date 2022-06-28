import React from 'react'
import Battle from './aerobics.jpg'
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';
export default function BattleRopes() {
  const [count,setCount] = useState(200);
  const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>Battle Ropes</h1>
        <img src={Battle} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        If you've ever been to a gym, you've probably seen someone tossing thick, heavy ropes around.
        These ropes are known as battle ropes, and many people use them for an intense strength-building
        and calorie-burning workout.
        Battle ropes target most of the muscles in your body, including those in your abdominals,
        shoulders, arms, upper and lower back, and lower body 
        If you're looking to target a specific area, you can change how you swing the ropes
        Swinging battle ropes requires your heart to quickly pump blood to all your working muscles.
        For this reason, numerous studies have shown significant improvements in cardiorespiratory 
        fitness after incorporating battle rope exercises for as little as 10 minutes per session.
        What's more, one study showed that battle rope exercises significantly increase heart rate
        and are classified as vigorous activity. This can burn a high volume of calories in a short
        time frame while strengthening your heart.
        Battle rope exercises can be a good option for people who have lower body injuries or prefer 
        low impact workouts.
        Most traditional battle rope exercises require your feet to be planted on the floor.
        Therefore, you can get your heart rate up without putting excessive strain on your lower body.

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
        <br/>
       
    </div>
  )
}
