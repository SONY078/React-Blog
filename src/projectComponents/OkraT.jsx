import Okr from './roasted-okra-masala-fb.jpg';
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';


export default function OkraT() 
{
    const [count,setCount] = useState(150);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1> Tips to cook Okra (Bhindi) in the right way</h1>
        <img src={Okr} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        Call it ‘Okra’, ‘Bhindi’ or ‘Lady’s Finger’, this humble vegetable is a summer favourite. It is biologically classified as a fruit but frequently used as a vegetable. Many people might not know this, but Bhindi is packed with an impressive nutritional profile. It is low in carbs and loaded with vitamin C and K1. Also, okra is one of the lesser-known vegetables that has protein in it as compared to the other vegetables. It is also rich in antioxidants and contains a thick gel-like substance, which is known as ‘mucilage’. It is what makes okra slimy and sticky. This substance makes it difficult for the okra to cook and even cut. So, if you are looking forward to making this humble vegetable at home this season, here are some of the tips that you must keep in mind.



        <h2>1/5 | The selection</h2>
        Though this vegetable can be found around the year, okra grows in abundance from May to September. While choosing this vegetable, make sure that the pods are small and crisp and can break from the centre, and avoid the ones with brown spots or blemishes.
        <h2>2/5 | The chopping tricks</h2>
        Have you ever realised that when you wash the okra and cut it right before cooking, it turns slimier? Well, it is because water enhances the sliminess and thus one should never wash the okra right before cooking it. When you wash the Bhindi, let it sit at room temperature before starting to chop. It is always best to cut large chunks rather than thin slices. The lesser surface area you will have, the less mucilage will escape.
        <h2>​3/5 | Reducing the sliminess</h2>
        There are 2 ways to reduce the sliminess. The first, is to freeze the okra and cut it while it is still frozen. This way you will realise that the okra is less slimier than when you cut it fresh. Another trick for reducing that sliminess is to soak the okra in vinegar for half an hour before cooking it. Before cooking, rinse and pat dry.
        <h2>4/5 | The right cooking method</h2>
        It is not easy to cook okra as it can turn mushy and slimier easily. Thus, it is suggested to cook it at high heat, which helps in eliminating a lot of the slime. Grilling and sauteing are the best ways to cook okra, as it helps in reducing mucilage. Just make sure that you never cover the okra with a pan, as the steam will make it slimier.
        <h2>5/5 | Add salt to the end</h2>
        It is a known fact that salt can produce moisture in a vegetable, so it is always better to add salt at the end of the cooking process when the Bhindi is almost cooked.

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
