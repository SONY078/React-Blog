import React from 'react'
import Des from './dess.jpg'
import Chai from './bas-best-masala-chai.webp';
import Okr from './roasted-okra-masala-fb.jpg';
import Kar from './navbharat-times.webp';
import Pap from './download.jpeg'; 
import Sus from './sushi-rolls-1296x728-header.webp';
import Chic from './chicken.jpg';
import Bbq from './maxresdefault.jpg';
import Tikka from './0n7il1h8_chicken-tikka-masala_625x300_21_January_20.webp';
import Sal from './Salmon-meal-prep-18001200-min.jpg';
// import Oat from './Oats-Idli.jpg';
// import GC from './Grilled-Chicken-Recipe-5-1200-1200x800.jpg';
import { Link } from 'react-router-dom'
export default function Food() {
  return (
    <div>
      <h1 id='tourism-heading' className="hover-underline-animation">Food</h1>
      <div id="fblock1">
            <Link to='/food/desserts'><img src={Des} alt='flying yoga' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>Can't help having a dessert?</h2>
            <p>Are you someone who loves eating desserts after elaborate desi meals, then these simple tricks will help manage sugar even after
            eating sweets.  
            <Link to='/food/desserts' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Food / Deserts</h3>
            </div>
        </div>
        <hr id='fhrline1'/>
        <div id="fblock2">
        <Link to='/food/chai'><img src={Chai} alt='swimming' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>What is Chai therapy</h2>
            <p>There’s an unmatchable solace in the enchanting taste and aroma of tea, 
              which engulfs the soul in every sip, which is no less than a relaxing therapy. Whether you are a tea fanatic or not, sipping on a hot cup of tea after a long hectic day or indulging in
               <Link to='/food/chai' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Food / Chai</h3>
            </div>
        </div>
        <hr id='fhrline2'/>
        <div id="fblock3">
        <Link to='/food/okra'><img src={Okr} alt='flying yoga' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>Tips to cook Okra</h2>
            <p>Call it ‘Okra’, ‘Bhindi’ or ‘Lady’s Finger’, this humble vegetable is a summer favourite. 
              It is biologically classified as a fruit but frequently used as a vegetable Many people might not know this, but Bhindi is packed with
               <Link to='/food/okra' id='readmore'>read more</Link>
               </p>
               
               <h3 id='tagline' >Food / Okra </h3>
            </div>
        </div>
        <hr id='fhrline3'/>
        <div id="fblock4">
        <Link to='/food/karonda'><img src={Kar} alt='flying yoga' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>Karonda can help prevent anaemia</h2>
            <p>Ever went to the market and saw this grape-sized fruit that has a mix of sweet and sour flavours?
            With its pinkish-white colour, Karonda is a lesser-known fruit 
               <Link to='/food/karonda' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Food / Karonde</h3>
            </div>
        </div>
        <hr id='fhrline4'/>
        <div id="fblock5">
        <Link to='/food/papaya'><img src={Pap} alt='flying yoga' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>Why papaya turns toxic when combined with this food?</h2>
            <p>
            Whether you are trying to lose weight, improve digestion or manage diabetes,one fruit that most
             
               <Link to='/food/papaya' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Food / Papaya </h3>
            </div>
        </div>
        <hr id='fhrline5'/>
        <div id="fblock6">
        <Link to='/food/sushi'><img src={Sus} alt='flying yoga' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>The do’s and don'ts of Sushi eating</h2>
            <p>
            The concept of Sushi originated from Japan and has now reached India. In the past few years, this Japanese delicacy has formed
               <Link to='/food/sushi' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Food / Sushi</h3>
            </div>
        </div>
        <div id="fad"></div>
        <h1 id='toppost' className="hover-underline-animation">Top Post</h1>
        <h2 id='bestvisits'>recipes for muscle-building and fat loss.</h2>
        <div id="tblock9">
        <Link to='/food/chicken'><img src={Chic} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}>  Asian Peanut Butter Sesame Chicken </h1>
        <h3 id='subR'>Try switching up your chicken meal prep for our Asian-inspired peanut<Link to='/food/chicken'>read more</Link></h3>    
        </div>
        <div id="tblock10">
        <Link to='/food/barbecue'><img src={Bbq} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}>  Bangin’ Barbecue Chicken & Rice </h1>
        <h3 id='subR'>This bangin’ barbecue chicken and rice meal prep recipe takes under 15 minutes <Link to='/food/barbecue'>read more</Link></h3>    
        </div>
        <div id="tblock11">
        <Link to='/food/tikka'><img src={Tikka} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}>30-Minute Chicken Tikka Masala</h1>
        <h3 id='subR'>Sometimes you just need something quick and easy to rely on, right? <Link to='/food/tikka'>read more</Link></h3>    
        </div>
        <div id="tblock12">
        <Link to='/food/salmon'><img src={Sal} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}> Quick Spicy Cajun Salmon & Garlicky Veg  </h1>
        <h3 id='subR'><br/>This spicy salmon meal prep recipe makes<Link to='/food/salmon'>read more</Link></h3>    
        </div>
    </div>
  )
}
