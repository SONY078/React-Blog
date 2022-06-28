import React from 'react'
import Spiti from './spiti.jpg';
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';
export default function SpitiValley() {
  const [count,setCount] = useState(200);
  const handleClick = ()=>setCount(count+1);
  return (
    <div>
      <h1>Spiti Valley</h1>
        <img src={Spiti} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        Spiti Valley (pronounced as Piti in Bhoti Language) is a cold desert mountain valley located high in the Himalayas in the north-eastern part of the northern Indian state of Himachal Pradesh. The name "Spiti" means "The middle land", i.e. the land between Tibet and India.[2]

The local population follows Vajrayana Buddhism similar to that found in the nearby Tibet and Ladakh regions. The valley and surrounding region are among the least populated regions in India. Spiti valley is a gateway to the northernmost reaches of the nation. Spiti forms part of the Lahaul and Spiti district. The sub-divisional headquarters (capital) is Kaza, Himachal Pradesh[3] which is situated on the Spiti River at an elevation of about 12,500 feet (3,800 m) above mean sea level.

Spiti valley is surrounded by high mountain ranges. Spiti valley is separated from Lahaul valley by the high Kunzum Pass, at 15,059 feet (4,590 m).[3] A road connects these two divisions of Lahaul and Spiti district, but is cut off frequently in winter and spring due to heavy snow. A southern route to India proper, via the Sutlej in the Kinnaur district and Shimla, is periodically closed for brief periods in the winter storms of November through June, but road access is usually restored a few days after the storm ends.
        
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
