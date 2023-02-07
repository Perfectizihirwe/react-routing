import React from 'react'
import './Home.css'
import "@fontsource/montserrat";
import { GoSearch } from 'react-icons/go'
import HomeCards from '../components/HomeCards';
import {TbBuildingSkyscraper} from 'react-icons/tb'
import {BsPeopleFill} from 'react-icons/bs'
import {BiWorld} from 'react-icons/bi'
import {BsHeart} from 'react-icons/bs'
import { Login } from '../screens/Login/Login';



export const Home = ()=>{
  return (
    <>
    <div>
    
      <div className='home-wrapper'>

        <form className='home-container1'>
          <div className='home-paragraph1'>
            <h6>Luxury Real Estate</h6>
            <h1>IT'S TIME TO FIND YOUR LUXURY HOME</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incid alor the old familer olfre idunt ut labore ellt.</p>
            <div className='home-search'>
            <input className='home-input' type="text" placeholder='Enter a Street, State, Zip or keyword'/>
            <div>
              <GoSearch className='go-icon'/>
            </div>
            </div>
          </div>
          <div className='home-paragraph2'>
              <img src='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/2-1-1536x967.jpg' alt="image_not_working"/>
          </div>
          
        </form>
        
        <div className='home-mid-pargra'>
          <h3>We Offer The Highest Level Of Expertise, Service, And Integrity.</h3>
          <p>Lorem ipsum dolor sit amet, cons ectetur adip cing ellit, selad do eiusmod tempor tolos dolor the old she roltoy incid idunt labore ellt dolore magna the alora aliqua.</p>
        </div>

        <div className='home-communities'>
          <p>Luxury At Its Finest</p>
          <h4>Featured Communities</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incid idunt ut labore ellt dolore<br></br> magna the alora aliqua alora the tolda on fouter.</p>
        </div>
      </div>
      <br></br>
      <div className='padfix'>
        <div className='home-card'>
        
            <HomeCards
            imageUrl='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-9-1.jpg'
            headertxt=' Poway'
            ptxt='Golf Community'
          />
            <HomeCards
            imageUrl='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/coronado-3-1.jpg'
            headertxt='Corolado'
            ptxt='The Town City'
          />
            <HomeCards
            imageUrl='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/gaslamp-2-1.jpg'
            headertxt='Gaslamp'
            ptxt='Nightlife & Foods'
          />
            <HomeCards
            imageUrl='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/point-loma-3-1-1.jpg'
            headertxt='Point Loma'
            ptxt='Hilly Peninsula'
          />
            <HomeCards
            imageUrl='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/rsf-2-1-1.jpg'
            headertxt='Rancho Sante Fe'
            ptxt='Rancho Sante Fe'
          />
            <HomeCards
            imageUrl='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/la-jolla-1.jpg'
            headertxt='La Jolla'
            ptxt='Seaside Bliss'
          />
        </div>
      </div>
      <br></br>
      <div className='wrapp-button-cover'>
        <button className='home-mid-button'>Explore More</button>
      </div>
     
      <div className='home-mid2-paragraph'>
          <div className='home-mid-block1'>
              <p>Blair Owens</p>
              <h4>A Real Estate Agency Leading The Luxury Properties Market Throughout The World</h4>
              
          </div>
              
          <div className='home-mid-block2'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum.</p>
            <h3>About us</h3>
          </div>
      </div>

      <br></br>

      <div className='home-mid-cards'>
          <div className='mid-card1'>
            <h3>45 Years Of Experience</h3><br></br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p>
          </div>
          <div className='mid-card2'>
            <h3>$125 Billion In Sales</h3><br></br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p>
          </div>
          <div className='mid-card3'>
            <h3>Tailormade End-To-End Service</h3><br></br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p>
          </div>
      </div>

      <div className='home-bottom'>
       <form className='home-bottom-wrapper'>

        <div className='bottom-block1 bot-Style'> 
        <br></br>
          <TbBuildingSkyscraper style={{fontSize: 50}}/>
          <h4>Top Rated Brokerage</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.

</p>

        </div>

        <div className='bottom-block2 bot-Style'>
        <br></br>
          <BsPeopleFill style={{fontSize: 50}}/>
          <h4>Committed Team</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.

</p>


        </div>

        <div className='bottom-block3 bot-Style'>
        <BiWorld style={{fontSize: 50}}/>
          <h4>International Reach</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.

</p>


        </div>
        
        <div className='bottom-block4 bot-Style'>
          <BsHeart style={{fontSize: 50}}/>
          <h4>Trust Us - You're In Good Hands</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.

</p>


        </div>

       </form>

       <section className='bottom-section'>
        <div cla>
          
          <p>You're In Good Hands</p>
          <h4>SELL YOUR PROPERTY <br></br>THROUGH BLAIR OWENS</h4>
        </div>

        <div className='wrapp-button-cover'>
          <button className='home-bottom-button'>Contact Us</button>
        </div>

        <div className='text-block2'>
          <h5>Looking To Buy A New Property?</h5> 
          <p>Explore The MLS</p>
          
        </div>

       </section>

       <form className='home-testimonial'>
        <div className='test-header'>
          <p>Testimonial</p>
          <h4>What Our Clients Say</h4>

        </div>
          

        <div className='home-testimonial-wrapper'>
          <div className='client-block1'>
            <img className='client-img-home' src='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/home-slide-3-2.jpg' alt='not_found'/>
          </div>
          <div className='client-block2'>
            <p>`“I couldn't be more impressed with the team at Blair Owens, they found my family our perfect dream home. True professionals from knowledge of the area, to the closing process and everything else in between — thank you!”`</p>
            <h5>The Family</h5>
            <img src='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/riley-profile.jpg' alt='not_found'/>
          </div>
          
        </div> 

       </form>


      </div>
    
    </div>
   
    </>
  )
}
