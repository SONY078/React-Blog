import React from 'react'
import Wiki from './wiki.webp';
import Mot from './moto.webp';
import Apl from './Apple.webp';
import Media from './media.webp';
import M52 from './m52.webp';
import CLab from './clab.png';
import Cryp from './crypto.jpeg';
import Green from './green.webp';
import Py from './pyt.webp';
import Ai from './ai.jpg';
import { Link } from 'react-router-dom';
export default function Technology() {
  return (
    <div>
      <h1 id='tourism-heading' className="hover-underline-animation">Technology</h1>
      <div id="fblock1">
      <Link to='/technology/wikipedia'><img src={Wiki} alt='flying yoga' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>Google agreed to Wikipedia</h2>
            <p>Google has agreed to pay Wikipedia for content displayed by its 
              search engine, mirroring deals the US tech giant has struck with news outlets in Europe.
              The Wikimedia Foundation, the charity that oversees<Link to='/technology/wikipedia' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Technology / Wikipedia</h3>
            </div>
        </div>
        <hr id='fhrline1'/>
        <div id="fblock2">
        <Link to='/technology/moto'><img src={Mot} alt='swimming' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>Moto G42 Launched</h2>
            <p>Moto G42 India launch has been tipped to take place as early as next week.
              The new Motorola phone was unveiled
              earlier this month and debuted in Brazil shortly after its official announcement.
              The Moto G42 comes with an
               <Link to='/technology/moto' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Technology / Moto G42</h3>
            </div>
        </div>
        <hr id='fhrline2'/>
        <div id="fblock3">
        <Link to='/technology/iphone'><img src={Apl} alt='flying yoga' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>iPhone stops charging at 80%</h2>
            <p>If your iPhone stopped charging beyond 80 per cent this year,
               it is likely the high temperature is the cause of the issue.
               Apple limits charging beyond a certain level
               <Link to='/technology/iphone' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Technology / Iphone </h3>
            </div>
        </div>
        <hr id='fhrline3'/>
        <div id="fblock4">
        <Link to='/technology/mediatek'><img src={Media} alt='flying yoga' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>MediaTek Dimensity 9000+ chipset launched</h2>
            <p>The MediaTek Dimensity 9000+ has just been launched. Here's what it improves on, compared to its predecessor, the Dimensity 9000.. 
               <Link to='/technology/mediatek' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Technology / MediaTek</h3>
            </div>
        </div>
        <hr id='fhrline4'/>
        <div id="fblock5">
        <Link to='/technology/m52'><img src={M52} alt='flying yoga' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>Samsung Galaxy M52 5G Price in India</h2>
            <p>
            Samsung Galaxy M52 5G price in India has dropped by over 30 percent under a limited period offer.
            The Samsung phone was launched last year with a starting price of Rs.
             
               <Link to='/technology/m52' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Technology / Samsung M52</h3>
            </div>
        </div>
        <hr id='fhrline5'/>
        <div id="fblock6">
        <Link to='/technology/clab'><img src={CLab} alt='flying yoga' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>Samsung's C-Lab programme</h2>
            <p>
            Over the years, the C-Labs inside programme have spawned innovative 
            Samsung products like its eco-packaging, The Sero Lifestyle TV and even Samsung Pay.
               <Link to='/technology/clab' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Technology / C-LAB</h3>
            </div>
        </div>
        <div id="fad"></div>
        <h1 id='toppost' className="hover-underline-animation">Top Post</h1>
        <h2 id='bestvisits'>Latest Technology News</h2>
        <div id="tblock9">
        <Link to='/technology/crypto'><img src={Cryp} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}> Crypto exchanges </h1>
        <h3 id='subR'>With token prices plummeting, customers unable to  <Link to='/technology/crypto'>read more</Link></h3>    
        </div>
        <div id="tblock10">
        <Link to='/technology/reliance'><img src={Green} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}> Reliance seeks new technologies </h1>
        <h3 id='subR'>As part of the push, Reliance Industries also plans to bid <Link to='/technology/reliance'>read more</Link></h3>    
        </div>
        <div id="tblock11">
        <Link to='/technology/python'><img src={Py} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}> PYTHON IS NO MORE OVERRATED</h1>
        <h3 id='subR'>As a form of low-impact exercise, yoga has been shown <Link to='/technology/python'>read more</Link></h3>    
        </div>
        <div id="tblock12">
        <Link to='/technology/ai'><img src={Ai} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}> FUTURE OF AI: MACHINES ARE INTELLIGENT </h1>
        <h3 id='subR'>Artificial Intelligence (AI) essentially means developing <Link to='/technology/ai'>read more</Link></h3>    
        </div>
    </div>
  )
}
