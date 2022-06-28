import React from 'react'
import Sh from './share.svg';
import Insta from './insta.png';
// import Aut from './Mask Group 15.png';
import Jen from './me-image-150x150 (1).jpg';
// import Faut from './author.png';
import Tikka from './0n7il1h8_chicken-tikka-masala_625x300_21_January_20.webp';
import { useState } from 'react';


export default function ChickenTikka() 
{
    const [count,setCount] = useState(150);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1> 30-Minute Chicken Tikka Masala</h1>
        <img src={Tikka} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        Sometimes you just need something quick and easy to rely on, right?
        <h2>Ingredients </h2>                
1 tbsp. 100% Coconut Oil <br/> 500g chicken breast (diced) <br/> 1 white onion (finely chopped) <br/> 4 garlic cloves (grated or crushed)  
<br/>1 tbsp. ginger (grated) <br/> 2 tbsp. tomato puree  <br/>
1 tsp. turmeric  <br/>
1 tsp. garam masala  <br/>
½ tsp. chilli powder  <br/>
1 tin chopped tomatoes (blended)  <br/>
1 mug of boiling chicken stock  <br/>
3 large tbsp. full-fat Greek yoghurt  <br/>
<h2>Serve with:</h2>

50g basmati rice per serving (dry weight)
2 flatbreads (cut into strips)
20g chopped cashews
<h2>Method</h2>
First, heat the coconut oil in a pan over a medium heat and add the chicken breast and onion. Season with salt and pepper, then fry until chicken is no longer pink on the outside.
Reduce your heat and add the garlic, ginger, tomato paste, turmeric, garam masala, and chilli powder, along with a splash of water and stir well for 1-2 minutes to allow the fragrances from the spices to release.
Then, add the blended tomatoes and chicken stock, bring your pan to simmer and leave to simmer for 10 minutes, stirring occasionally.
Once your sauce has reduced by roughly half, take off the heat and stir through the Greek yoghurt. If you want it super-creamy, feel free to add more Greek yoghurt or vice versa.
Serve with basmati rice, flatbread strips, and chopped cashews.
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
<img src={Jen} alt='artrika' id='author'/><h3> ennifer Blow - Editor & Qualified Nutritionist</h3>
        
        </p>
    </div>
  )
}
