import React from 'react'
import { Link } from 'react-router-dom';
import Tajmahal from './taj-mahal-agra.jpg';
import RedF from './redfort.jpg'
import LotusT from './lotus.webp';
import Ajan from './Ajanta.jpg';
import Budh from './Buddha.webp';
import CharM from './charminar.jpg';
import HaM from './HAMPI.jpg';
import Rat from './Feature-Ranthambore-Tiger.jpg';
import Shil from './India-International-Cherry-Blossom-Festival_14th-nov.webp';
import GoaB from './goa.jpg'
import Spiti from './spiti.jpg';
export default function Tourism() {
  return (
    <div id='tourism-container'>
        <h1 id='tourism-heading' className="hover-underline-animation">Tourism</h1>
        <div id="tblock1">
        <Link to='/tourism/tajmahal' id='readmore'><img src={Tajmahal} alt='Taj Mahal' id='tourism-img'/></Link>
            <div id="subdiv">
            <h2 id='sub-heading'>Taj Mahal - Agra </h2>
            <p>One of Seven Wonders of the World, 
                White Marble Mughal Architecture,
                 the Taj Mahal was built by emperor 
                 Shah Jahan in the   
               <Link to='/tourism/tajmahal' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Tourism / january</h3>
            </div>
        </div>
        <hr id='hrline1'/>
        <div id="tblock2">
        <Link to='/tourism/redfort' id='readmore'><img src={RedF} alt='Red Fort' id='tourism-img'/></Link>
            <div id="subdiv">
            <h2 id='sub-heading'>Red Fort - Delhi </h2>
            <p>The Red Fort or Lal Qila is a historic fort in Old Delhi, Delhi in India that served as 
                the main residence of the Mughal Emperors. Emperor Shah Jahan commissioned
                <Link to='/tourism/redfort' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Tourism / October</h3>
            </div>
        </div>
        <hr id='hrline2'/>
        <div id="tblock3">
        <Link to='/tourism/lotus' id='readmore'><img src={LotusT} alt='Lotus Temple' id='tourism-img'/></Link>
            <div id="subdiv">
            <h2 id='sub-heading'>Lotus Temple - Delhi </h2>
            <p>The Lotus Temple, located in Delhi, India, is a Bahá'í House of Worship that was dedicated
                 in December 1986. Notable for its flowerlike shape, it has become a <Link to='/tourism/lotus' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Tourism / june</h3>
            </div>
        </div>
        <hr id='hrline3'/>
        <div id="tblock4">
        <Link to='/tourism/park' id='readmore'><img src={Rat} alt='park' id='tourism-img'/></Link>
            <div id="subdiv">
            <h2 id='sub-heading'>ranthambore national park - Rajasthan </h2>
            <p>The Lotus Temple, located in Delhi, India, is a Bahá'í House of Worship that was dedicated
                 in December 1986. Notable for its <Link to='/tourism/park' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Tourism / april</h3>
            </div>
        </div>
        <hr id='hrline4'/>
        <div id="tblock5">
        <Link to='/tourism/hampi' id='readmore'><img src={HaM} alt='hampi' id='tourism-img'/></Link>
            <div id="subdiv">
            <h2 id='sub-heading'>Hampi - Karnataka </h2>
            <p>Hampi is an ancient village in the south Indian state of Karnataka.
                 It's dotted with numerous ruined temple complexes from the Vijayanagara Empire.
                 <Link to='/tourism/hampi' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Tourism / October</h3>
            </div>
        </div>
        <hr id='hrline5'/>
        <div id="tblock6">
        <Link to='/tourism/charminar' id='readmore'><img src={CharM} alt='charminar' id='tourism-img'/></Link>
            <div id="subdiv">
            <h2 id='sub-heading'>Charminar - Hyderabad </h2>
            <p>The Charminar constructed in 1591, is a monument located in Hyderabad, 
                Telangana, India. The landmark has become <Link to='/tourism/charminar' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Tourism / December</h3>
            </div>
        </div>
        <hr id='hrline6'/>
        <div id="tblock7">
        <Link to='/tourism/ajanta' id='readmore'><img src={Ajan} alt='ajanta' id='tourism-img'/></Link>
            <div id="subdiv">
            <h2 id='sub-heading'>Ajanta - Maharashtra </h2>
            <p style={{paddingBottom:'9px'}}>The Ajanta Caves are approximately 30 rock-cut Buddhist
                 cave monuments dating from the 2nd century BCE t<Link to='/tourism/ajanta' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Tourism / may</h3>
            </div>
        </div>
        <hr id='hrline7'/>
        <div id="tblock8">
        <Link to='/tourism/bodh' id='readmore'><img src={Budh} alt='bodh' id='tourism-img'/></Link>
            <div id="subdiv">
            <h2 id='sub-heading'>Bodh Gaya - bihar </h2>
            <p>Bodh Gaya is a village in the northeast Indian state of Bihar.
                 Considered one of the most important Buddhist pilgrimage sites,
                 it's dominated by<Link to='/tourism/bodh' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Tourism / October</h3>
            </div>
        </div>
        <h1 id='toppost' className="hover-underline-animation">Top Post</h1>
        <h2 id='bestvisits'>Best places to visit in this season</h2>
        <div id="tblock9">
        <Link to='/tourism/shillong' id='readmore'><img src={Shil} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}>Shillong - Megalaya </h1>
        <h3 id='subR'>Travel - Monsoon</h3>    
        </div>
        <div id="tblock10">
        <Link to='/tourism/goa' id='readmore'><img src={GoaB} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}>Goa - Western India </h1>
        <h3 id='subR'>Travel - Monsoon</h3>    
        </div>
        <div id="tblock11">
        <Link to='/tourism/spiti' id='readmore'><img src={Spiti} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}>Spiti Valley - Himachal Pradesh </h1>
        <h3 id='subR'>Travel - Monsoon</h3>    
        </div>
        <div id='adver'></div>

    </div>
  )
}












