import React from 'react'
import Sh from './share.svg';
import Insta from './insta.png';
// import Aut from './Mask Group 15.png';
import Jen from './me-image-150x150 (1).jpg';
// import Faut from './author.png';
import Chic from './chicken.jpg';
import { useState } from 'react';


export default function Chicken() 
{
    const [count,setCount] = useState(150);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1> Asian Peanut Butter Sesame Chicken</h1>
        <img src={Chic} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        <h2>For the Chicken</h2>
        <ul>
        <li>5 tbsp. Peanut Butter</li>
        <li>50ml orange juice</li>
        <li>3 tbsp. Sugar-Free Syrup (Maple Flavour)</li>
        <li>3 tbsp. soy sauce</li>
        <li>1 thumb ginger (grated)</li>
        <li>3 chicken breasts</li>
        </ul>
        <h2>For the salad:</h2>
        <ul>
            <li>2 cucumbers (spiralised or thinly sliced)</li>
            <li>2 carrots (spiralised or thinly sliced)</li>
        </ul>
        <h2>Salad dressing:</h2>
        <ul>
            <li>2 tbsp. Sugar-Free Syrup (Maple Flavour) or Maple Syrup</li>
            <li>4 tbsp. soy sauce</li>
            <li>2 tbsp. sesame oil (if you don’t have this, substitute for your preferred oil or go without to reduce fat content)</li>
        </ul>
        <h2>Serve with:</h2>
        <ul>
            <li>30g (dry weight) brown/basmati rice per meal</li>
        </ul>
        <h2>Method</h2>
        <ol>
            <li> Preheat the oven to 200°C or 180°C for fan-assisted.</li>
            <li>Whisk peanut butter, 100ml hot water and orange juice together until smooth then add the syrup, soy sauce and ginger. Set aside.</li>
            <li>Season and sear the chicken breasts by frying on a high heat using a non-stick pan for 3 minutes on each side, then transfer to a casserole dish and thoroughly coat the chicken with the peanut butter sauce.</li>
            <li>Bake for 20 minutes.</li>
            <li>Whilst waiting, make the salad dressing by whisking the syrup, soy, sesame oil and seeds together, then combine with the spiralised cucumber and carrots.</li>
            <li>Once the chicken is cooked, place into meal prep boxes and serve with the salad and brown rice. Three days lunch prep sorted.</li>
        </ol>
        <br/>
        <h2>Calories: 489     |      Protein: 40g      |     Fat: 20g       |    Carbs: 39g</h2>
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
<img src={Jen} alt='artrika' id='author'/><h3> Jennifer Blow - Editor & Qualified Nutritionist</h3>
        
        </p>
    </div>
  )
}
