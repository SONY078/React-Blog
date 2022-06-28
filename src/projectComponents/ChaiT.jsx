import React from 'react'
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import Chai from './bas-best-masala-chai.webp';
import { useState } from 'react';


export default function ChaiT() 
{
    const [count,setCount] = useState(150);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1> What is Chai therapy? How to use it to improve your mood</h1>
        <img src={Chai} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        There’s an unmatchable solace in the enchanting taste and aroma of tea, which engulfs the soul in every sip, which is no less than a relaxing therapy. Whether you are a tea fanatic or not, sipping on a hot cup of tea after a long hectic day or indulging in it during a chai break can instantly reduce stress levels and bring down anxiety. Ever wondered why? Here’s all you need to know about tea therapy and why experts believe it is the best cost effective way to reduce stress.
        <h2>1/5 | ​Chamomile tea</h2>
        This flower based tea has mild flavour but is great for healing stress and anxiety. The sedative properties of Chamomile tea helps in reducing healing the nervous system, relaxes the muscles and induces sleep. Drinking this tea before bed time, helps in reducing cognitive pressure and boosts metabolism, which also helps in weight loss.
        <h2>2/5 | ​Tulsi tea</h2>
        Basil tea or Tulsi tea helps in boosting immunity and provides a quick relief in stress and anxiety. Tulsi tea has antidepressant properties, which help in releasing happy hormones and reduce the stress level in the body. The enchanting aroma of Basil leaf also relieves headache and calms the senses.
        <h2>3/5 | ​Ashwagandha tea</h2>
        This age-old secret herb is used for its healing and medicinal properties. Drinking Ashwagandha tea helps in boosting overall health and also helps in boosting cognitive strength. According to experts, drinking this tea helps in reducing depression, mood swings, reduces stress and anxiety and helps in inducing sleep. The tea helps in releasing endorphins in the body which keep the brain active and agile, while relaxing and soothing the senses.
        <h2>4/5 | Sage tea</h2>
        Brewed in warm water, this herbal tea has been used since ages to boost brain power, reduce stress and anxiety. This simple tea promotes alertness of the brain and calms the nerves and muscles.
        <h2>5/5 | What is tea therapy? Does it work?</h2>
        A warm cup of tea can instantly reduce the anxiety and stress in day-to-day life, if consumed in moderation. This is because of the presence of caffeine, minerals and antioxidants in tea, which help in lowering the anxiety levels naturally and boost energy. The antioxidants in tea help in cell regeneration and healing of damaged brain cells. According to studies, drinking tea in moderation can help in reducing cortisol hormones, which is basically triggered due to physical and mental stress. Including these tea blends can help in improving cognitive heath and reduce stress.

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
