import React from 'react'
import Py from './pyt.webp';
import Art from './artrika.jpeg';
import Sh from './share.svg';
import Insta from './insta.png'
import { useState } from 'react';
export default function Python() 
{
    const [count,setCount] = useState(963);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
        <h1>PYTHON IS NO MORE OVERRATED, THANKS TO PYTHON 3.11</h1>
        <img src={Py} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        <h2>With CPython making Python 3.11 more powerful and smart, now, can we say that Python is not overrated?</h2>
        The Python programming language delivers new amazing versions once a year, along with a feature-locked beta release in the previous half of the year, and the concluding release comes up at the end of the year. The feature finalized set for Python 3.11 has been finalized with a beta version reachable for testing. Developers are inspired to try their hands on this latest non-production code to ensure that it works well with your programs and to get an overview of whether the code you are working on will get advantage from its performance enrichments.

Python function calls also require less overhead in Python 3.11. Stack frames for function call now use less memory and are more efficiently designed. Also, while recursive calls aren’t tail-optimized (which probably isn’t possible in Python, anyway), they are more efficient than in previous versions. The Python interpreter itself also starts faster, and core modules needed for the Python runtime are stored and loaded more efficiently.

According to the official Python benchmark suite, Python 3.11 runs around 1.25 times faster than version 3.10. Note that this speedup is an aggregate measure: some things are much faster, but many others are only slightly faster or about the same. Still, the best part about these improvements is that they come for free. You don’t need to make any code changes for Python programs to take advantage of 3.11’s speedups.

According to the news, the performance advancements are accomplished only by gaining the advantage of Faster CPython- a Microsoft-funded, smartly developed project. Faster CPython has the default interpreter known as ‘CPython’. This interpreter adopts just-in-time compiler technology and finds out the code that can be advantageous from this special and smart solution. This grants instructions in executed code objects to be framed with a new instruction. The new instruction is executed faster. This, after all, makes all of Python run faster.
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
<img src={Art} alt='artrika' id='author'/><h3>Artrika Datta</h3>
        </p>
        
    </div>
  )
}
