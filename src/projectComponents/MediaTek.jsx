import React from 'react'
import Media from './media.webp';
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';
export default function MediaTek() {
  const [count,setCount] = useState(500);
  const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>MediaTek Dimensity 9000+ chipset launched</h1>
        <img src={Media} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        The MediaTek Dimensity 9000+ has just been launched.
        Here's what it improves on, compared to its predecessor, the Dimensity 9000.
        Mediatek has launched a mid-cycle successor to its 2022 flagship chipset, the Dimensity 9000. In a move similar to what Qualcomm has been doing in recent years, the Dimensity 9000+ succeeds the 9000 but unlike Qualcomm, the new chip doesn’t include a lot of improvements over its predecessor.

The major difference between the Dimensity 9000+ and Dimensity 9000 is a higher-clocked prime core in the chipset, which the company says will offer a boost in performance. That’s a new 3.2GHz Cortex X2 core compared to a 3GHz Cortex X2 core on the Dimensity 9000.
The rest of the chipset has no changes compared to the older chip. We still have three Cortex A710 cores at 2.85Ghz and four Cortex A510 cores at 1.8GHz (although MediaTek hasn’t confirmed the clock speed of the A510 cores for the Dimensity 9000+ yet).
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
<img src={Aut} alt='artrika' id='author'/><h3>Tech guru</h3>
        </p>
    </div>
  )
}
