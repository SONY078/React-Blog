import React from 'react'
import Cryp from './crypto.jpeg';
import Art from './artrika.jpeg';
import Sh from './share.svg';
import Insta from './insta.png'
import { useState } from 'react';
export default function Crypto() {
  const [count,setCount] = useState(963);
  const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>Crypto exchanges hunker down as everything goes wrong in India</h1>
        <img src={Cryp} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        With token prices plummeting, customers unable to transfer money to their accounts and 
        a dreaded transaction tax on cryptocurrencies just around the corner, exchanges in India 
        are bracing for a drawn-out crypto winter

        India’s largest digital assets exchanges are bracing for a drawn-out crypto 
        winter — one with some unwelcome local twists.

With token prices plummeting, customers unable to transfer money to their accounts 
and a dreaded transaction tax on cryptocurrencies just around the corner, exchanges 
like Binance-backed WazirX have put expansion plans on the back burner.

“We have cut down all our non-critical costs,” said Rajagopalan Menon, WazirX’s vice president. 
“We are hiring only critical hires, we aren’t spending money at all. 
It’s literally crypto winter here,” he said, using industry jargon for an extended bear market.
        of these have raised a total of over $100 million in follow-up investments.
        <a href='https://indianexpress.com/article/technology/crypto/crypto-exchanges-hunker-down-as-everything-goes-wrong-in-india-7991890/'>read more on indian Express</a>
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
<img src={Art} alt='artrika' id='author'/><h3>Artrika Datta</h3>
        
        </p>
    </div>
  )
}
