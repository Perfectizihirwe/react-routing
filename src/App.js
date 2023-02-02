
import "@fontsource/montserrat"; // Defaults to weight 400.
import "@fontsource/roboto"; // Defaults to weight 400.

import {Routes, Route} from 'react-router-dom'
import Cards from './components/Cards';
import Services from './components/Services';
import {About} from './screens/About/About';
import {Contact} from './screens/Contact';
import {OurProperties} from './screens/ourProprties/OurProperties';
import {News} from './screens/News/News';
import {MLS} from './screens/MLS/MLS';
import {Communities} from './screens/Communities/Communities';
import {Home} from './components/Home';
import {Readmore} from './screens/Readmore/Readmore'
import {Nextpage} from './screens/News/Nextpage'

import HomeCards from './components/HomeCards';
import AboutCards from "./components/AboutCards";




import {Navbar} from './components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/mls' element={<MLS/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/communities' element={<Communities/>}/>
        <Route path='/ourproperties' element={<OurProperties/>}/>

        <Route path='/homecards' element={<HomeCards/>}/>
        <Route path='news/readmore' element={<Readmore/>}/>
        <Route path='news/readmore/page2' element={<Nextpage/>}/>
        <Route path='about/aboutcards' element={<AboutCards/>}></Route>
        
      </Routes>
      
    </>
  );
}

export default App;
