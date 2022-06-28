import React from 'react'
import { Link } from 'react-router-dom';
import FlyY from './pexels-cottonbro-4323299.jpg';
import Swi from './pexels-jim-de-ramos-1263349.jpg';
import Battle from './aerobics.jpg'
import Run from './running.jpg'
import Pil from './pilates.jpg';
import Stret from './stretching.jpg';
import Med from './medi.jpg';
import Boxi from './boxing.jpg';
import Yog from './yoga.jpg';
import Res from './resistance.jpg';
export default function Fitness() {
  return (
    <div id='fitness-container'>
      <h1 id='tourism-heading' className="hover-underline-animation">Fitness</h1>
      <div id="fblock1">
      <Link to='/fitness/flyingyoga'><img src={FlyY} alt='flying yoga' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>Flying Yoga</h2>
            <p>What is flying yoga good for?
            Image result for flying yoga
            The benefits of aerial yoga
            A combination of the arts and athletics, 
            aerial yoga offers several physical and psychological
            benefits: Improved flexibility, stability, and balance. 
               <Link to='/fitness/flyingyoga' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Fitness / yoga</h3>
            </div>
        </div>
        <hr id='fhrline1'/>
        <div id="fblock2">
        <Link to='/fitness/swimming'><img src={Swi} alt='swimming' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>Swimming</h2>
            <p>Swimming is a suitable exercise for people of all ages. 
              It can help a person get or stay in shape, 
              and the benefits also extend to mental health.
              People who are 19-64 years of age should aim to get 150 minutes of moderate 
               <Link to='/fitness/swimming' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Fitness / Swimming</h3>
            </div>
        </div>
        <hr id='fhrline2'/>
        <div id="fblock3">
        <Link to='/fitness/battleropes'><img src={Battle} alt='flying yoga' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>Battle Ropes</h2>
            <p>With your right hand, swing one rope out to the side in a circular motion. 
              As the rope returns to the starting position, do the same with your left hand. 
              Continue alternating hands for 30 seconds without stopping.Take a  
               <Link to='/fitness/battleropes' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Fitness / Battle Ropes</h3>
            </div>
        </div>
        <hr id='fhrline3'/>
        <div id="fblock4">
        <Link to='/fitness/running'><img src={Run} alt='flying yoga' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>Running</h2>
            <p>Running, or jogging, is one of the best cardio exercises you can do. 
              Running for at least 10 minutes a day can significantly lower your risk of cardiovascular disease. 
              Runners lower their chances of dying from heart disease by half. 
               <Link to='/fitness/running' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Fitness / Running</h3>
            </div>
        </div>
        <hr id='fhrline4'/>
        <div id="fblock5">
        <Link to='/fitness/pilates'><img src={Pil} alt='flying yoga' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>Pilates</h2>
            <p>
            What does a Pilates workout do?
            Health benefits of Pilates
            increased muscle strength and tone, particularly of your abdominal muscles, 
            lower back, hips and buttocks (the 'core muscles' of your body) balanced muscular 
             
               <Link to='/fitness/pilates' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Fitness / pilates</h3>
            </div>
        </div>
        <hr id='fhrline5'/>
        <div id="fblock6">
        <Link to='/fitness/stretching'><img src={Stret} alt='flying yoga' id='fitness'/></Link>
            <div id="subfit">
            <h2 id='sub-heading'>Stretching</h2>
            <p>What is the benefits of stretching?
Stretching keeps the muscles flexible, strong, and healthy, 
and we need that flexibility to maintain a range of motion in the joints. 
Without it, the muscles shorten and become tight. 
Then, when 
               <Link to='/fitness/stretching' id='readmore'>read more</Link>
               </p>
               <h3 id='tagline' >Fitness / Stretching</h3>
            </div>
        </div>
        <div id="fad"></div>
        <h1 id='toppost' className="hover-underline-animation">Top Post</h1>
        <h2 id='bestvisits'>Fitness for Mental Health</h2>
        <div id="tblock9">
        <Link to='/fitness/meditation'><img src={Med} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}> Meditation </h1>
        <h3 id='subR'>Meditation can produce a deep state of relaxation and <Link to='/fitness/meditation'>read more</Link></h3>    
        </div>
        <div id="tblock10">
        <Link to='/fitness/boxing'><img src={Boxi} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}> Boxing </h1>
        <h3 id='subR'>The rumours that hitting a punchbag releases stress and anger is true<Link to='/fitness/boxing'>read more</Link></h3>    
        </div>
        <div id="tblock11">
        <Link to='/fitness/yoga'><img src={Yog} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}> Yoga </h1>
        <h3 id='subR'>As a form of low-impact exercise, yoga has been shown <Link to='/fitness/yoga'>read more</Link></h3>    
        </div>
        <div id="tblock12">
        <Link to='/fitness/resistance'><img src={Res} alt='Shilong' id='tourism-imgR'/></Link>
        <h1 style={{textAlign:"left",opacity: 0.87}}> Resistance Training </h1>
        <h3 id='subR'>Lifting weights or bodyweight exercises can have a huge<Link to='/fitness/resistance'>read more</Link></h3>    
        </div>
    </div>
  )
}
