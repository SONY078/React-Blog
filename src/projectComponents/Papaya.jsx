import React from 'react'
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import Pap from './download.jpeg';
import { useState } from 'react';


export default function Papaya() 
{
    const [count,setCount] = useState(150);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1> Why papaya turns toxic when combined with this food?</h1>
        <img src={Pap} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        <h2> Are you eating papaya in the wrong way</h2>
        Whether you are trying to lose weight, improve digestion or manage diabetes, one fruit that most experts vouch for is Papaya.
        This is due to the umpteen health benefits of this fruit, which is loaded with vitamin A, C, minerals and antioxidants. But do you know this common fruit can also turn toxic and fatal if consumed with one food. Here’s all you need to know about papaya and its dangerous effects.
        <h2> ​What makes papaya so good?</h2>
        It is full of nutrients like dietary fiber, protein, fats, carbohydrates, vitamins C, A, E, B, minerals and antioxidants like alpha and beta-carotene, lutein and zeaxanthin that help in cell regeneration and reduce the oxidative stress.
        <h2>​ Papaya turns toxin with lemon</h2>
        So, if you have been adding lime juice to papaya salads, then it might actually do more harm than good. Lemon and papaya together turn toxic and may lead to anemia and hemoglobin imbalance, which can turn dangerous for kids as well as adults. Thus, it is advised to avoid this combination. Here are some other precautions one needs to keep in mind while consuming papaya.
        <h2>​Things to keep in mind while consuming papaya:</h2>
        On an average one bowl of papaya or 3 thin slices are enough to give your body the right amount of nutrition, but the excessive intake of this fruit can be harmful too.
        The presence of an enzyme papain in the papaya can cause allergies like swelling, dizziness, headache, rashes in those allergic to it.


            <br/><br/>
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
<img src={Aut} alt='artrika' id='author'/><h3> TIMESOFINDIA</h3>
        
        </p>
    </div>
  )
}
