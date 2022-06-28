import React from 'react'
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';
import SH from './736e2-16536606932493-1920.webp';
import Sev from './sev.jpg';
export default function Seventeen() 
{
    const [count,setCount] = useState(150);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>SEVENTEEN sets the stage on fire with 'Be The Sun' world tour concert in Seoul</h1>
        <img src={Sev} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        K-pop band SEVENTEEN's second and final in-person show in Seoul, a part of their 'Be The Sun' world tour, ended with a bang on Sunday with the group members belting out hits such as "Left & Right" and "Boom Boom".
Consisting of 13 members namely group leader S.Coups, Jeonghan, Joshua, Jun, Hoshi, Wonwoo, Woozi, DK, Mingyu, The8, Seungkwan, Vernon, and Dino, the band started the concert with the songs "HOT", "March" and "Hit".
"Putting up this concert was very challenging," said S.Coups.
"We are meeting after 2 years and 4 months. I'm happy that I'm a singer and an idol. It is a great profession to be an idol. I will never get this kind of love in another job. We want to be the best in our field. We are happy that CARATs who came to see us are happy. We will do our best to make you proud. I will continue to be the proud leader of SEVENTEEN," he added.

The show, which was also live-streamed on Weverse across the globe, went on for around four hours.
SEVENTEEN had shared the plans of their debut world tour with CARAT, their fan club, during their fan event 'SEVENTEEN in CARAT LAND' in March.
Joshua said the concert is an extension of their recently released full-length album 'Face The Sun'.
"This album contains the message, 'We want to rise to the top and become the sun'. As an extension of that, I hope this concert lifts everyone's shadows and fills them with light," the singer, who is part
of the vocal unit with Woozi, Jeonghan, DK, and Seungkwan, said.
DK said the group hopes fans had a good time at the show. "This is the last day, so I hope I'll give you lots of positive energy and we'll do our best," he added.
They also thanked their global fans for watching the concert virtually.
The show tracklist included songs such as "Rock With You", "2 Minus 1", "Moonwalker", "GAM3 BO1", "Back It Up", "Mansae", "Very Nice", "Shadow", and "Crush", among others.
In April, the band released their first full-fledged English language single "Darl+ing", a pre-release song to 'Face The Sun', which they also performed at the concert.
<br/><br/>
<img src={SH} alt='Taj Mahal' id='seve'/>
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
<img src={Aut} alt='artrika' id='author'/><h3> India TV </h3>
        
        </p>
    </div>
  )
}
