import React from 'react'
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';
import Tajmahal from './taj-mahal-agra.jpg';
export default function TajMahal() {
  const [count,setCount] = useState(200);
    const handleClick = ()=>setCount(count+1);
  return (
    <div id='tajmahal-containner'>
        <h1>Taj Mahal - Agra</h1>
        <img src={Tajmahal} alt='Taj Mahal' id='maintaj'/>
        <p id='tparagraph'>One of Seven Wonders of the World, 
            White Marble Mughal Architecture, the Taj Mahal was 
            built by emperor Shah Jahan in the memory of his wife, 
            Mumtaj Mahal. It is located at the bank of river Yamuna 
            in Agra. It was completed in 1653 with the estimated cost 
            of 32 million Indian rupees which would today stand up to
             58 billion Indian rupees. It is considered as the best 
             example of Mughal architecture worldwide and is called 
             the “Jewel of Muslim Art in India”. This is probably the 
             monument that is most recognised the world over
             for its association with the Indian heritage sites
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
<img src={Aut} alt='artrika' id='author'/><h3>Sravya Tourism </h3>
        </p>
    </div>
  )
}
