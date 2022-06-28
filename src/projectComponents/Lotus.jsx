import React from 'react'
import LotusT from './lotus.webp';
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';
export default function Lotus() {
  const [count,setCount] = useState(200);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
      <h1>Lotus Temple</h1>
        <img src={LotusT} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        Lotus Temple is one of the prominent attractions of New Delhi. It is close to Nehru Place, one of the busiest commercial hubs in the city. The temple is built in the shape of a lotus flower amidst the lush green landscape that turn up to a pleasant and tranquil ambience. It is a Bahai House of Worship and is open to people from all religions. The Bahaí Faith is a world religion whose purpose is to unite all races and peoples in one universal Cause and one common Faith.


Lotus Temple is one of the prominent attractions of New Delhi. It is close to Nehru Place, one of the busiest commercial hubs in the city. The temple is built in the shape of a lotus flower amidst the lush green landscape that turn up to a pleasant and tranquil ambience. It is a Bahai House of Worship and is open to people from all religions. The Bahaí Faith is a world religion whose purpose is to unite all races and peoples in one universal Cause and one common Faith.

The temple is made of white marbles, cement, dolomite and sand with around nine crystal clear pools dotted all over it. The approximate 40 metre tall sanctum in the form of 27 blooming petals can accommodate as much as 2000 people at a time. Lotus Temple, one of the seven Bahai Houses of Worship has won laurels and applauds from all over the world for its impressive architectural design and rationale behind it. There are nine doors of the Lotus Temple which opens onto a central hall. Its vicinity comprises of gardens decorated with towering trees, short bushes and colourful flowers.

Tourists visiting Lotus Temple should remember that:

The nearest metro station to the Lotus Temple is the Kalkaji metro station that falls on the Violet Line route
Visiting Hours: 9 a.m. to 5 p.m.
Open all days. (Closed on Monday)

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
