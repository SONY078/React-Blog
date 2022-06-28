import React from 'react'
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';

import Hobi from './hobi.webp';
export default function Jhope() 
{
    const [count,setCount] = useState(50);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>BTS member J-Hope to release solo album 'Jack In The Box' in July</h1>
        <img src={Hobi} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        J-Hope, a member of the South Korean music sensation BTS, is set to drop his solo album 'Jack In The Box' on July 15. BTS's management agency Big Hit Music made the announcement on the fan community forum Weverse on Saturday night, days after the group said they will focus on solo projects for a while.
"We would like to announce the release of 'Jack In The Box,' j-hope's solo album. BTS has turned the page on their new chapter, throughout which the members will harmoniously carry out their group and individual activities. j-hope will be the first member of BTS to start this new journey and release his solo album," the agency said in a statement.
The album's first single will be unveiled on July 1, with all the tracks released on July 15.
Big Hit Music said J-Hope's solo album represents "his aspirations to break the mold and grow further".
"Starting with his pre-release track to be released on July 1st, diverse content to show j-hope's creative identity as an artist will be introduced.
"Please stay tuned and we will continue to provide you with more details on the album. We hope that you look forward to 'Jack In The Box' and send j-hope your love and support as he takes his first step as a solo artist," the agency further said.

            
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
<img src={Aut} alt='artrika' id='author'/><h3> PTI</h3>
        
        </p>
    </div>
  )
}
