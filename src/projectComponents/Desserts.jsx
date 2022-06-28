import React from 'react'
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import Des from './dess.jpg'
import { useState } from 'react';


export default function Desserts() 
{
    const [count,setCount] = useState(150);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1> Can't help having a dessert? Do this to balance the calorie intake</h1>
        <img src={Des} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        <h2>1/5 | Expert suggested tip to manage calories</h2>
        Are you someone who loves eating desserts after elaborate desi meals, then these simple tricks will help manage sugar even after eating sweets. Sugar intake directly impacts your calorie count and weight, this is the reason why most experts suggest avoiding refined sugar or desserts made with refined sugar. But here are some expert suggested ways to manage the calories after eating a dessert.
        <h2>2/5 | What you eat is important?</h2>
        Yes, eating desserts is not an issue, but what exactly you eat and how much you eat decides the fate of your diet. If you crave desserts or sweets after the meals, make sure you include a small portion and do not exceed more than 100 calories. To manage a healthy calorie count of 1400-2000 calories a day.
        As per a report by the World Health Organization (WHO) only six to 10 percent of our daily calories should come from sugar, which is around 120 to 200 calories if you are following a daily intake of 2,000 calories to manage a healthy weight. Thus, portion control is essential.
        <h2>​3/5 | Detox drinks</h2>
        Drinking a detox drink after meals like ginger tea, green tea, fennel tea or black tea with herbs can help in cutting down the excess calorie intake by accelerating the metabolic rate, which further helps in burning the fat molecules during the process of digestion.
        <h2>4/5 | Quick walk</h2>
        This is a simple way to manage sugar levels even when you are eating healthy. Walk for 10-15 minutes after the meals, this helps in burning the excess calories, boost metabolism and helps in gradual release of sugar in the bloodstream.
        <h2>5/5 | Choose healthier alternative</h2>
        Even if you feel like indulging in a sweet treat make sure you stick to something that’s healthy. If you are suffering from diabetes, taking 2-3 dates or raisins or a small piece of jaggery or dark chocolate can help in satiating those sugar cravings in a much healthier way!


            <br/><br/>
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
<img src={Aut} alt='artrika' id='author'/><h3> TIMESOFINDIA</h3>
        
        </p>
    </div>
  )
}
