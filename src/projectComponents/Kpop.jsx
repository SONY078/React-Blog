import React from 'react'
import { Link } from 'react-router-dom';
import Nay from './NAYEON.jpg';
import Lisa from './original.jpg';
import Js from './ju.jpg';
import Bt from './bts.webp';
import Bts2 from './bts2.webp';
import Min from './Minhyuk.jpg';
import LVB from './lisavb.jpg';
import Hobi from './hobi.webp';
import Sev from './sev.jpg';
import Er from './eric.jpg'
export default function Kpop() {
  return (
    <div>
      <h1 id='tourism-heading' className="hover-underline-animation">Technology</h1>
      <div id="fblock1">
            <Link to='/kpop/nayeon'><img src={Nay} alt='flying yoga' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>TWICE's Nayeon Achieves Highest</h2>
            <p>TWICE’s Nayeon has racked up over half a million stock pre-orders for her long-awaited solo debut album!
            Ahead of Nayeon’s solo debut on June 24, JYP Entertainment officially announced that as of  
            <Link to='/kpop/nayeon' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' > Kpop / Nayeon</h3>
            </div>
        </div>
        <hr id='fhrline1'/>
        <div id="fblock2">
        <Link to='/kpop/lalisa'><img src={Lisa} alt='swimming' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>BLACKPINK's Lisa's “LALISA” Becomes</h2>
            <p>BLACKPINK's Lisa has made YouTube history once again!
              On June 25 at 5:06 a.m. KST, Lisa's music video for her solo debut track “LALISA” 
              surpassed 500 
               <Link to='/kpop/lalisa' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Kpop / Lalisa Manoban</h3>
            </div>
        </div>
        <hr id='fhrline2'/>
        <div id="fblock3">
        <Link to='/kpop/jungkook'><img src={Js} alt='flying yoga' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>BTS: Jungkook Attends Seventeen's Concert</h2>
            <p>k-pop band Seventeen has kicked off their Be The Sun World Tour with two shows in Seoul, 
              before heading out to other countries.
               <Link to='/kpop/jungkook' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Kpop / Jungkook,Seventeen </h3>
            </div>
        </div>
        <hr id='fhrline3'/>
        <div id="fblock4">
        <Link to='/kpop/bts'><img src={Bt} alt='flying yoga' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>K-pop band BTS is caught between</h2>
            <p>Some members of the world’s biggest K-pop group will soon be fulfilling their military service duties.
              The decision by K-pop sensations, BTS, to take a hiatus is breaking hearts
               <Link to='/kpop/bts' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Kpop / BTS</h3>
            </div>
        </div>
        <hr id='fhrline4'/>
        <div id="fblock5">
        <Link to='/kpop/bts2'><img src={Bts2} alt='flying yoga' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>Angry fans demand apology from Korean writer</h2>
            <p>
                Fans pointed out that in an attempt to praise BTS, the writer belittled other K-pop 
                idols and overlooked the growth of 
             
               <Link to='/kpop/bts2' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Kpop / BTS</h3>
            </div>
        </div>
        <hr id='fhrline5'/>
        <div id="fblock6">
        <Link to='/kpop/minhyuk'><img src={Min} alt='flying yoga' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>HUTA (BTOB's Minhyuk) makes his solo</h2>
            <p>
            On June 27 KST, CUBE Entertainment unveiled his 
            2nd full-length solo album 'BOOM,'
               <Link to='/kpop/minhyuk' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Kpop / Minhyuk</h3>
            </div>
        </div>
        <div id="fad"></div>
        <h1 id='toppost' className="hover-underline-animation">Top Post</h1>
        <h2 id='bestvisits'>Latest k-pop News</h2>
        <div id="tblock9">
        <Link to='/kpop/paris'><img src={LVB} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}> V, Lisa and Park Bo-gum </h1>
        <h3 id='subR'>V, Lisa, and Park Bogum at the Celine Fashion Show in Paris. <Link to='/kpop/paris'>read more</Link></h3>    
        </div>
        <div id="tblock10">
        <Link to='/kpop/jhope'><img src={Hobi} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}> BTS member J-Hope to release solo </h1>
        <h3 id='subR'>J-Hope, a member of the South Korean music sensation BTS <Link to='/kpop/jhope'>read more</Link></h3>    
        </div>
        <div id="tblock11">
        <Link to='/kpop/seventeen'><img src={Sev} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}> SEVENTEEN sets the stage on fire</h1>
        <h3 id='subR'>K-pop band SEVENTEEN's second and final in-person show in Seoul <Link to='/kpop/seventeen'>read more</Link></h3>    
        </div>
        <div id="tblock12">
        <Link to='/kpop/ericnam'><img src={Er} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}> Eric Nam cancels Czech  </h1>
        <h3 id='subR'>Korean-American singer and entrepreneur Eric Nam had to cancel his latest<Link to='/kpop/ericnam'>read more</Link></h3>    
        </div>
    </div>
  )
}
