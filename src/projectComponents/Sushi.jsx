import React from 'react'
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import Sus from './sushi-rolls-1296x728-header.webp';
import { useState } from 'react';


export default function Sushi() 
{
    const [count,setCount] = useState(150);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1> The do’s and don'ts of Sushi eating</h1>
        <img src={Sus} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        The concept of Sushi originated from Japan and has now reached India. In the past few years, this Japanese delicacy has formed its own fan base in India. With over 100 Japanese restaurants in India serving this dish of seafood wrapped up with vinegar flavoured rice - sushi is truly a blessing in form of food and one shouldn’t miss out on this beautiful and delicious experience. Eating sushi is an art in itself and if you are new to the world of sushi, you are probably confused from where to begin with. Don’t worry we got you covered. Here are the dos and don’ts that will help you ace the sushi game. 
        <h2>Use wasabi carefully</h2>
        Wasabi sauce might add taste to your bite but one needs to be very careful while dipping their sushi into the fiery hot paste.
        DO: Use just a bit of it on your first go, if you think you can handle the spice, level up on your next bite.
        DON’T: Do not get excited about it and smother the whole thing at the very first bite! 
        <h2>How to use ginger on the side</h2>
        Ginger is served along with the sauces and wasabi in the form of a palate cleanser.
        DO: Have a little bit of ginger from time to time while going for the next variety.
        DON’T: Do not place the ginger on top of your sushi before putting it in your mouth.
        <h2>Remember this while dipping your sushi into soy sauce</h2>
        Extra soy sauce tends to mess up with flavours of the sushi, one just needs wee little bit of it to go with their sushi.
DO: You are supposed to dip your sushi for a second into the soy sauce

DON’T: You are not supposed to drown your sushi into the soy sauce.

DO: Dip the fish side of your sushi into soy sauce, this side needs the flavour

DON’T: Do not dip the rice side of your sushi, ever. The rice side is flavoured and spiced up and it doesn’t need soy sauce to flavour it up. (Image: istock)
<h2>How to use chopsticks</h2>
Before going out to the sushi place, make sure you’ve watched plenty of ‘HOW TO USE CHOPSTICKS’ tutorials and have practised well at home first to avoid the judgey looks of people at the restaurant.
DO: While taking out the sushi for yourself, use the backends of your chopsticks and not the one that you are putting in your mouth.

DON’T: Don’t rub your chopsticks together to remove the wooden splinters. It looks rude, just trust the sushi place for handing out good quality chopsticks. (Image: istock)




Also Read: Interesting facts about Japanese cuisine

PlayUnmute
Fullscreen
VDO.AI


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
