import React from 'react'
import Mot from './moto.webp';
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';
export default function Moto() {
  const [count,setCount] = useState(500);
  const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>Moto G42 India Launch Tipped for Next Week</h1>
        <img src={Mot} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        Moto G42 India launch has been tipped to take place as early as next week.
        The new Motorola phone was unveiled earlier this month and debuted in Brazil shortly
        after its official announcement. The Moto G42 comes with an OLED display and is powered
        by an octa-core Qualcomm Snapdragon 680 SoC. It also comes with triple rear cameras and
        carries 18W fast charging.
        The Moto G42 comes as a watered-down variant of the Moto G52 that was launched in India in April.
        <h2>Moto G42 India launch (expected)</h2>
        Tipster Yogesh Brar has tweeted to claim that the Moto G42 is launching in India next week.
         The exact launch date has not yet been revealed, though.
        Earlier this month, the Moto G42 was launched in Brazil in Atlantic Green and Metallic Rosé — alongside
        the debut of the Moto G62 5G. Motorola at the time confirmed that both its new phones 
        will roll out to select markets in Asia, Europe, Latin America, and the Middle East in the coming weeks.
        <h2>Moto G42 price</h2>
        Moto G42 price has been set at BRL 1,699 (roughly Rs. 25,900) for the single 4GB RAM + 128GB
        storage variant. However, details about the India pricing of the smartphone are yet to be announced.
        <h2>Moto G42 specifications</h2>
        Although specifications of the Moto G42 India variant are yet to be revealed, they are expected
        to be identical to the global model that debuted in Brazil. The smartphone runs Android 12 with
        My UX on top and features a 6.4-inch full-HD+ (1,080x2,400 pixels) OLED display with a 20:9 aspect
        ratio and a 60Hz refresh rate. It is powered by the Snapdragon 680 SoC, along with Adreno 610 GPU
        and 4GB of RAM. The Moto G42 also comes with the triple rear camera setup that houses a 50-megapixel
        primary sensor with an f/1.8 lens, along with an 8-megapixel ultra-wide shooter and a 2-megapixel
        macro shooter.
        For selfies and video chats, the Moto G42 offers a 16-megapixel selfie camera sensor at the front,
        with an f/2.2 lens.
        The Moto G42 comes with 128GB of onboard storage that supports expansion via a microSD card through a dedicated slot.
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
