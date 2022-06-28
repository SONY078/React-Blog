import React from 'react'
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import Kar from './navbharat-times.webp';
import { useState } from 'react';


export default function Karonda() 
{
    const [count,setCount] = useState(150);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>How Karonda can help prevent anaemia and easy recipes inside</h1>
        <img src={Kar} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        Karonda is a ‘khatta meetha’ fruit that belongs to the berry family and is often confused with cranberries and cherries. The fruit is sour when a bit raw and turns sweeter as it ripens. In India, Karonda is mostly grown in the Konkan region of Maharashtra and Goa and even in areas of Rajasthan, Gujarat, Bihar, West Bengal and Uttar Pradesh.
        Want to add some extra sourness to your chutney? Add a handful of Karondas to it.
To make green mint chutney, add 1 cup coriander leaves, ¼ cup mint leaves, ¼ cup karondas, 5 garlic cloves, 2 green chillies, ½ onion, ½ tsp roasted cumin seeds and salt as per taste to a blender.
Grind everything to form a smooth paste.
Your lip-smacking chutney is ready to be served.
Another easy way to include the goodness of Karonda in your diet is by adding some to your sabzi. Karonda can be added to any kind of dry sabzi like aloo gobhi, bhindi masala, mixed veg etc.
Just cut the Karonda in half, remove the seed and chop it into small pieces.
Add them while cooking the sabzi, depending on how sour you want the sabzi to be.
Karondas are naturally soft in texture and require very less cooking time.
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
