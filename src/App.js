// import logo from './logo.svg';
import './App.css';
import Front from './projectComponents/frontPage';
import Home from './projectComponents/Home';
import Tourism from './projectComponents/Tourism';
import Technology from './projectComponents/Technology';
import Kpop from './projectComponents/Kpop';
import Fitness from './projectComponents/Fitness';
import Food from './projectComponents/Food';
import TajMahal from './projectComponents/TajMahal';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import RedFort from './projectComponents/RedFort';
import Lotus from './projectComponents/Lotus';
import Ranthambore from './projectComponents/Ranthambore';
import Hampi from './projectComponents/Hampi';
import Charminar from './projectComponents/Charminar';
import Ajanta from './projectComponents/Ajanta';
import BodhGay from './projectComponents/BodhGay';
import FlyingYoga from './projectComponents/FlyingYoga';
import Swimming from './projectComponents/Swimming';
import BattleRopes from './projectComponents/BattleRopes';
import Running from './projectComponents/Running';
import Pilates from './projectComponents/Pilates';
import Stretching from './projectComponents/Stretching';
import Meditation from './projectComponents/Meditation';
import Boxing from './projectComponents/Boxing';
import Yoga from './projectComponents/Yoga';
import Resistance from './projectComponents/Resistance';
import Wikipedia from './projectComponents/Wikipedia';
import Moto from './projectComponents/Moto';
import Apple from './projectComponents/Apple';
import MediaTek from './projectComponents/MediaTek';
import Samsung from './projectComponents/Samsung';
import SamClab from './projectComponents/SamClab';
import Crypto from './projectComponents/Crypto';
import GreenHydro from './projectComponents/GreenHydro';
import Python from './projectComponents/Python';
import ArtInt from './projectComponents/ArtInt';
import Nayeon from './projectComponents/Nayeon';
import Lalisa from './projectComponents/Lalisa';
import JungSeven from './projectComponents/JungSeven';
import BTS from './projectComponents/BTS';
import Minhyuk from './projectComponents/Minhyuk';
import Bts from './projectComponents/Bts2';
import ParisShow from './projectComponents/ParisShow';
import Jhope from './projectComponents/Jhope';
import Seventeen from './projectComponents/Seventeen';
import EricNam from './projectComponents/EricNam';
import Desserts from './projectComponents/Desserts';
import ChaiT from './projectComponents/ChaiT';
import OkraT from './projectComponents/OkraT';
import Karonda from './projectComponents/Karonde';
import Papaya from './projectComponents/Papaya';
import Sushi from './projectComponents/Sushi';
import Chicken from './projectComponents/Chicken';
import Barbeque from './projectComponents/Barbeque';
import ChickenTikka from './projectComponents/ChickenTikka';
import Salmon from './projectComponents/Salmon';
import Shillong from './projectComponents/Shillong';
import Goa from './projectComponents/Goa';
import SpitiValley from './projectComponents/SpitiValley';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Front/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/tourism' element={<Tourism/>}/>
        <Route path='/technology' element={<Technology/>}/>
        <Route path='/kpop' element={<Kpop/>}/>
        <Route path='/fitness' element={<Fitness/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path='/tourism/tajmahal' element={<TajMahal/>}/>
        <Route path='/tourism/redfort' element={<RedFort/>}/>
        <Route path='/tourism/lotus' element={<Lotus/>}/>
        <Route path='/tourism/park' element={<Ranthambore/>}/>
        <Route path='/tourism/hampi' element={<Hampi/>}/>
        <Route path='/tourism/charminar' element={<Charminar/>}/>
        <Route path='/tourism/ajanta' element={<Ajanta/>}/>
        <Route path='/tourism/bodh' element={<BodhGay/>}/>
        <Route path='/tourism/shillong' element={<Shillong/>}/>
        <Route path='/tourism/goa' element={<Goa/>}/>
        <Route path='/tourism/spiti' element={<SpitiValley/>}/>
        <Route path='/fitness/flyingyoga' element={<FlyingYoga/>}/>
        <Route path='/fitness/swimming' element={<Swimming/>}/>
        <Route path='fitness/battleropes' element={<BattleRopes/>}/>
        <Route path='/fitness/running' element={<Running/>}/>
        <Route path='/fitness/pilates' element={<Pilates/>}/>
        <Route path='/fitness/stretching' element={<Stretching/>}/>
        <Route path='/fitness/meditation' element={<Meditation/>}/>
        <Route path='/fitness/boxing' element={<Boxing/>}/>
        <Route path='/fitness/yoga' element={<Yoga/>}/>
        <Route path='/fitness/resistance' element={<Resistance/>}/>
        <Route path='/technology/wikipedia' element={<Wikipedia/>}/>
        <Route path='/technology/moto' element={<Moto/>}/>
        <Route path='/technology/iphone' element={<Apple/>}/>
        <Route path='/technology/mediatek' element={<MediaTek/>}/>
        <Route path='/technology/m52' element={<Samsung/>}/>
        <Route path='/technology/clab' element={<SamClab/>}/>
        <Route path='technology/crypto' element={<Crypto/>}/>
        <Route path='/technology/reliance' element={<GreenHydro/>}/>
        <Route path='/technology/python' element={<Python/>}/>
        <Route path='/technology/ai' element={<ArtInt/>}/>
        <Route path='/kpop/nayeon' element={<Nayeon/>}/>
        <Route path='/kpop/lalisa' element={<Lalisa/>}/>
        <Route path='/kpop/jungkook' element={<JungSeven/>}/>
        <Route path='/kpop/bts' element={<BTS/>}/>
        <Route path='/kpop/bts2' element={<Bts/>}/>
        <Route path='/kpop/minhyuk' element={<Minhyuk/>}/>
        <Route path='/kpop/paris' element={<ParisShow/>}/>
        <Route path='/kpop/jhope' element={<Jhope/>}/>
        <Route path='/kpop/seventeen' element={<Seventeen/>}/>
        <Route path='/kpop/ericnam' element={<EricNam/>}/>
        <Route path='/food/desserts' element={<Desserts/>}/>
        <Route path='/food/chai' element={<ChaiT/>}/>
        <Route path='/food/okra' element={<OkraT/>}/>
        <Route path='/food/karonda' element={<Karonda/>}/>
        <Route path='/food/papaya' element={<Papaya/>}/>
        <Route path='/food/sushi' element={<Sushi/>}/>
        <Route path='/food/chicken' element={<Chicken/>}/>
        <Route path='/food/barbecue' element={<Barbeque/>}/>
        <Route path='/food/tikka' element={<ChickenTikka/>}/>
        <Route path='/food/salmon' element={<Salmon/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
