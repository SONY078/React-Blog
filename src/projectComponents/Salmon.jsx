import React from 'react'
import Sh from './share.svg';
import Insta from './insta.png';
// import Aut from './Mask Group 15.png';
import Jen from './me-image-150x150 (1).jpg';
// import Faut from './author.png';
import Sal from './Salmon-meal-prep-18001200-min.jpg';
import { useState } from 'react';


export default function Salmon() 
{
    const [count,setCount] = useState(150);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1> Quick Spicy Cajun Salmon & Garlicky Veg</h1>
        <img src={Sal} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        This spicy salmon meal prep recipe makes 3 days’ worth of tasty lunches and is seriously easy to prepare. Plus, salmon is brimming with omega-3 fatty acids – known to enhance muscle building and keep you lean. Bonus.
        <h2>Ingredients</h2>
        3 cloves garlic (roughly chopped)<br/>
1 lemon (sliced into very thin rings)<br/>
3 wild salmon fillets<br/>
1.5 tbsp. cajun seasoning (or to make your own, mix a pinch of salt, pepper, garlic powder, onion powder, cayenne pepper, paprika, dried oregano and thyme together)<br/>
1 tbsp. olive oil<br/>
1 tsp. coarse sea salt and black pepper<br/>
180g (dry weight) couscous<br/>
10-12 stems tender stem broccoli<br/>
2 courgettes
<h2>Method</h2>
Preheat oven to 160°C. Chop the dry ends of the tender stem broccoli off (about 1cm) and spiralise the courgette (you can cut the courgette into thin strips if you don’t own a spiraliser). Lay the broccoli out into a deep baking tray, then layer with the courgette, garlic, and lemon and season with sea salt and black pepper. Drizzle with a little olive oil.

2. Rub the salmon fillets on all sides with the remaining olive oil and the cajun seasoning, then place them on top on the vegetables, skin-side up. Bake for 25 minutes, then increase the temperature to 180°C and bake for a further 5 minutes, until the skin begins to crisp up.

3. Cook couscous according to instructions on the pack, then divide amongst 3 Tupperware containers. Divide the salmon, vegetables and some lemon slices amongst the containers and allow to cool. Cover and refrigerate for up to 3 days. When ready to eat, microwave on full power for 3 minutes or until piping hot.


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
<img src={Jen} alt='artrika' id='author'/><h3>ennifer Blow - Editor & Qualified Nutritionist</h3>
        
        </p>
    </div>
  )
}
