import React from 'react'
import HaM from './HAMPI.jpg';
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';
export default function Hampi() {
  const [count,setCount] = useState(200);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
      <h1>Hampi</h1>
        <img src={HaM} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        Laid-back Hampi was the last capital of Vijayanagar, one of the greatest Hindu kingdoms in India’s history. The area has some amazing ruins, intriguingly intermingled with large boulders that dot the landscape. It's a must-visit destination in India, and an incredible energy can be felt there. Plan your trip with this Hampi travel guide.
        <h2>When to Go</h2>
The best time to visit Hampi is when it's cool and dry, from November to February. In March, the weather starts getting unbearably hot.

If you enjoy local color and culture, make sure you go during the three-day Hampi Festival (also known as the Vijaya Utsav). Dance, drama, music, fireworks, and puppet shows all take place with the ruins of Hampi as a backdrop. This popular (and crowded) festival usually happens in November but has been moved to January in the last couple of years, so it's wise to check the dates with Karnataka Tourism beforehand.

In March or April, the Virupaksha Car Festival is held to mark the annual marriage ritual of the gods and goddesses. It's the largest religious festival in Hampi.

Hampi is also a good place to celebrate the Holi festival in South India, in March.

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
