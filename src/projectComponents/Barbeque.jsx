import React from 'react'
import Sh from './share.svg';
import Insta from './insta.png';
// import Aut from './Mask Group 15.png';
import Jen from './me-image-150x150 (1).jpg';
// import Faut from './author.png';
import Bbq from './maxresdefault.jpg';
import { useState } from 'react';


export default function Barbeque() 
{
    const [count,setCount] = useState(150);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>  Bangin’ Barbecue Chicken & Rice</h1>
        <img src={Bbq} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        <h2>Ingredients</h2>
        <ul>
            <li>1 tbsp. Coconut Oil</li>
            <li>450g cooked white rice</li>
            <li>600g chicken breast</li>
            <li>6 handfuls spinach</li>
            <li>75g sweetcorn</li>
            <li>3 tbsp. barbecue sauce</li>
            <li>1 tsp. sweet paprika</li>
            <li>9 cherry tomatoes</li>
        </ul>
        <h2>Method</h2>
        <ol>
            <li>Cut each raw chicken breast in half horizontally.</li>
            <li>Rub the barbecue sauce, paprika, salt and pepper all over the chicken.</li>
            <li>Add the coconut oil to a hot frying pan or griddle and place the chicken in the pan over a medium heat for around 4 minutes on each side. Turn over and once thoroughly cooked, place on a plate to cool.</li>
            <li> Add 2 handfuls of the spinach into the base of your plastic Tupperware tubs.</li>
            <li>Cook rice according to instructions on pack and allow to cool. Fill your tubs on one side.</li>
            <li> Spoon the sweetcorn on top of the rice and add sliced tomatoes.</li>
            <li>Finish the prep by adding the cold chicken and place in the fridge.
            And there you have it – 3-day chicken meal prep in 15 minutes.
            </li>
        </ol>
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
