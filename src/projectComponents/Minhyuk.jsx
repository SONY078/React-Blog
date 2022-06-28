import React from 'react'
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';

import Min from './Minhyuk.jpg'
export default function Minhyuk() 
{
    const [count,setCount] = useState(5);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>HUTA (BTOB's Minhyuk) makes his solo return through dynamic MV for latest single 'BOOM'</h1>
        <img src={Min} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        On June 27 KST, CUBE Entertainment unveiled his 2nd full-length solo album 'BOOM,' featuring its titular title track "BOOM."
        "BOOM" captures the excitement that comes with unfamiliarity, utilizing the strong beat of the 'wonk trap' genre. In a recent press conference for the comeback, Minhyuk said he deliberately chose the title track's unusual genre as he felt "attracted to its uniqueness."

Meanwhile, 'BOOM' features 12 tracks in total – "I'm Rare," "Shadow," "넌 나의 봄이야," "그대가 모르게 사랑일까요 (feat. BTOB's Changsub)," "위험해," "Real Game," "우리 함께 걸어요," "Red Wine," "기다리고 있어," and "끝눈" – which have all been written and composed by Minhyuk himself.

        
            
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
<img src={Aut} alt='artrika' id='author'/><h3>Dani - Dee</h3>
        
        </p>
    </div>
  )
}
