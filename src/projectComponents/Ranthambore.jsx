import React from 'react'
import Rat from './Feature-Ranthambore-Tiger.jpg';
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';
export default function Ranthambore() {
  const [count,setCount] = useState(200);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
      <h1>Ranthambore park</h1>
        <img src={Rat} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        The popular wildlife destination in India, Ranthambore National Park remains open between October and June. The winter season between October and March is considered the best time to visit Ranthambore National Park due to the pleasant weather condition when the temperature ranges between comfortable 10℃ and 30℃. During this season, animals can be seen in the broad daylight basking under the sun.

In the months between April and June (summer season), Ranthambore experiences hot and humid weather with mercury rising up to 40℃. The month of April is still comfortable with temperatures not exceeding more than 30 – 35℃. However, May and June are extremely hot months. During the summers though, one has more chances of sighting tigers and other animals who frequently have to visit the water holes to keep themselves hydrated.

In the monsoon season between July and September, many of the zones of Ranthambore National Park remain closed for the visitors. The core of the national park with Gates 1 to 5 remain closed in the monsoon; the buffer zone with Gate 6 to 10 remain open in this season.
        
        
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
<img src={Aut} alt='artrika' id='author'/><h3>Sravya Tourism </h3>
        </p>
    </div>
  )
}
