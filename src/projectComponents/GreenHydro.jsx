import React from 'react'
import Rel from './rel.webp';
import Green from './green.webp';
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';
function GreenHydro() {
  const [count,setCount] = useState(500);
  const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>Reliance Industries seeks new technologies to make cheaper green hydrogen</h1>
        <img src={Rel} alt='Taj Mahal' id='green1'/>
        <p id='tpara'>
        As part of the push, Reliance Industries also plans to bid for any production-linked incentives 
        the government may offer to encourage the technology
        
        Reliance Industries Ltd., controlled by Indian billionaire Mukesh Ambani, is assessing new 
        technologies for making electrolyzers in its efforts to produce low-cost green hydrogen in the country.
        <br/><br/>
        <img src={Green} alt='flying yoga' id='green'/>
        <br/><br/>

As part of the push, the company also plans to bid for any production-linked incentives 
the government may offer to encourage the technology, Kapil Maheshwari, president for new energy at 
Reliance, said at the BloombergNEF summit in New Delhi on Wednesday.


 
Prime Minister Narendra Modi’s government unveiled the first phase of its green hydrogen policy in February, offering a range of incentives for companies to set up projects. India is considering offering more “sweeteners” for producers, Power and Renewable Energy Minister Raj Kumar Singh said last week.

Green hydrogen has drawn tens of billions of dollars in investment commitments from investors, including Ambani and rival tycoon Gautam Adani. The fuel, produced by splitting water with the help of clean energy like wind power, is seen as critical to decarbonizing hard-to-abate industries such as oil refineries and steel mills, helping meet global targets to zero out emissions and fight global warming.

Maheshwari said India needs to provide certainty about policies and help build a market for green hydrogen by requiring some industries to purchase the fuel, a step the government is already discussing.

Reliance will pursue an aggressive target to produce green hydrogen at $1 per kilogram by the end of this decade, Ambani said last year. At the time, the cost of producing the fuel was between $2.22 and $4.62 a kilogram in India.

Ambani and Adani have pledged more than $140 billion in green investments, as their fossil fuel-driven empires pivot away from oil and coal. Green hydrogen is central to this shift, as the two tycoons champion the government’s ambition to make India a global leader for production and exports of this fuel.
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

export default GreenHydro