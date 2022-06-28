import React from 'react'
import Ai from './ai.jpg';
import Aim from './aim.jpg';
import Aimg from './ai-g.jpg';
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
import { useState } from 'react';
export default function ArtInt() 
{
    const [count,setCount] = useState(1000);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>FUTURE OF AI: MACHINES ARE INTELLIGENT ENOUGH TO EXECUTE COMPLEX TASKS THEMSELVES</h1>
        <img src={Ai} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        <h2>AI is already powering search engines, online translators, 
            virtual assistants, and numerous marketing and sales decisions</h2>
            Artificial Intelligence (AI) essentially means developing machines with the ability 
            to think strategically and act for them. AI is the simulation of human intelligence 
            processes by machines, especially computer systems. Specific applications of AI include 
            expert systems, natural language processing, speech recognition, and machine vision. 
            They can learn from prior data or experience which helps them generate predictions to 
            execute future tasks and actions. 
            This does not bottleneck their capabilities and it is possible for machines to surpass 
            human intelligence. Humans learn through memory while machines learn through data. 
            Although the human brain does possess a unique capacity and we can memorize or recall 
            facts and data, for large data or time-span it is not so reliable. It is possible to 
            develop a machine through AI and machine learning with a larger memory capacity so that 
            it can accumulate more data, which can provide us with reliable information and correct 
            data even for longer time spans.
            AI experts agree that we're still in the early days of teaching systems to deeply reason, 
            with a few examples of progress in narrow applications such as self-driving cars 
            and select professions. Much work remains to reach a level of efficiency that allows 
            for scaling reasoning capabilities across a broader swath of applications. There has 
            been a 14x increase in the number of active AI startups since 2000. Thanks to recent 
            advances in deep learning, AI is already powering search engines, online translators, 
            virtual assistants, and numerous marketing and sales decisions.
            <br/><br/>
            <img src={Aim} alt='flying yoga' id='green'/>
            <br/><br/>
            <h2>Key trends that shaping the future of AI and Machine Learning</h2>
            Artificial Intelligence and machine learning systems so far rely on increased computing power, 
            availability of more data, better algorithms, and better tools for improvement. Though it is 
            hard to put these against a timeline, all these areas are in the need of dramatic improvements. 
            In addition, thanks to cryptography and blockchain, it is becoming easier to use 
            the wisdom of the crowd to build Artificial Intelligence solutions which will also facilitate 
            AI model building.
            <br/><br/>
            <img src={Aimg} alt='flying yoga' id='green'/>
            <br/><br/>
            <h2>Advances in computing power</h2>
            Advances in computational power and numerical optimization routines have enabled the possibility of 
            applying rigorous simulation and optimization techniques to large-scale problems such as those associated 
            with the design, optimization, and control of integrated chemical processes and energy systems. Increasing 
            computing power has become available through the use of GPUs for machine learning. These were initially 
            designed 
            to carry out millions of calculations in parallel to meet the demand for fast-moving graphics in video games.
            <a href='https://www.analyticsinsight.net/future-of-ai-machines-are-intelligent-enough-to-execute-complex-tasks-themselves/'>Read more</a>
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
<img src={Aut} alt='artrika' id='author'/><h3>Industry Trends</h3>
        
        </p>
    </div>
  )
}
