import React from 'react'
import RedF from './redfort.jpg'
import Sh from './share.svg';
import Insta from './insta.png';
import Aut from './Mask Group 15.png';
// import Faut from './author.png';
import { useState } from 'react';
export default function RedFort() {
  const [count,setCount] = useState(200);
    const handleClick = ()=>setCount(count+1);
  return (
    <div>
      <h1>Red Fort</h1>
        <img src={RedF} alt='Taj Mahal' id='fit-img'/>
        <p id='tparagraph'>
        Seat of the Mughal Empire since Emperor Shah Jehan, the Red Fort stood for the might of imperial Hindustan. The medieval structure in Delhi holds significance even today as the Prime Minister of India makes his customary Independence Day speech from the ramparts of the fort on August 15.
The fort stood at the eastern edge of Shahjahanabad, the new capital of Mughal Empire created by Shah Jehan in 17th century. Shahjahanabad was the seventh Delhi created since Indraprastha, the capital of Pandavas.
Built by Shah Jehan as his residence, the fort gets its name from the massive wall of red sandstone. The Red Fort was called the “Qila-i-Mubarak” or “The blessed fort”; however, it is popularly known as ‘Lal Qila’. Though the Agra fort made of red sandstone is also called Lal Qila, it is the fort at Delhi which is associated with the name.
Architecture of the fort, its planning and beauty showcases the ingenuity of Mughals and their love for creating masterpieces in stone. Though the fort has lost its glory and looks rather forlorn, it was the centre-stage of political happenings. The pomp and power of the fort was on display each Friday, when Emperor Shah Jahan paraded out of the fort at the head of his retinue atop an elephant, to offer prayers at the Jama Masjid.
The fort shot into limelight again and became the epicentre of political developments during the Revolt of 1857. It was the residence of the Mughals till the last royal Bahadur Shah Zafar was arrested for his role in the mutiny.
The fort was the scene of an important event associate with the Indian freedom struggle. The joint court-martial of officers of Subhash Chandra Bose’s Indian National Army – Colonel Prem Sahgal, Colonel Gurubaksh Singh Dhillon and Major General Shah Nawaz Khan – was held at the Red Fort. The trio was defended by the INA Defence Committee which included legal luminaries like Jawaharlal Nehru, Bhulabhai Desai, Kailashnath Katju and Asaf Ali.
The Red Fort attracts large number of tourists for its architecture, history and for its sheer magnificence. The Red Fort is one of the most popular tourist destinations in Delhi.
Architecture
Situated along the Yamuna River, the fort spread over 254 acres, was designed to incorporate the pre-existing Salimgarh Fort. The construction of the fort began in 1638 and took a decade to finish.
Situated at the eastern edge of Shahjahanabad, the fort gets its name from the massive wall of red sandstone. The wall is about 2.5 km long and it varies in height from 60 ft on the river side to 110 ft towards the city.
It was surrounded by a 10m-deep moat. It was crossed on wooden drawbridges but was lated replaced with stone bridges. A moat surrounded the fort and it was fed by waters from the Yamuna River.
Various monuments in the fort – the Diwan-i-Khas or Hall of Private Audiences, the Chatta Chowk, the Khas Mahal, the Diwan-i-Khas, the hammams, the Moti Masjid, the formal garden, the Hayat Bakhsh Bagh, etc. still speak of the Mughal love for architecture and splendour.
The Red Fort was declared as a UNESCO World Heritage Site in 2007.

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
<img src={Aut} alt='artrika' id='author'/><h3>Sravya Tourism </h3>
        </p>
    </div>
  )
}
