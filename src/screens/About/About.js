import '../ourProprties/style.css'
import '../Communities/Communities.css'
import './About.css'
import AboutCards from '../../components/AboutCards'

export const About = () =>{
    return (
        <div className='about-wrapper'>
           <div className="search-container">
                <form className='form'>
                        <div><input type={"text"} placeholder="Street, city, or Zip"/></div>
                        <div>
                            <label for="cars"></label>

                            <select name="status" className='boxes'>
                                <option value="volvo">All stutus</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div>
                            <label for="cars"></label>

                            <select name="status" className='boxes'>
                                <option value="volvo">All Cities</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div>
                            <label for="cars"></label>

                            <select name="status" className='boxes'>
                                <option value="volvo">All Zipcodes</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        
                        <div><button className='boxe1'>Search</button></div>
                        <div><button className='boxe2'>More</button></div>
                        
                </form>
            </div>

            <div className="properties-wrapper">
               
                <div className='block1'>
                    <p><span>Blair Owens</span></p>
                    <p style={{fontSize: 60, lineHeight: 1.2, position: 'relative', top: (-40),fontWeight: 'lighter'}}>San Diego's <br></br>Top Brokerage Team</p>
                </div>
                <div className='block2'><p>lorem loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed tellus felis, vulputate id eleifend sit amet, varius non ipsum.</p></div>
            
            </div>

            <div className='about-mid2'>
                    <p>Industry Leading Agency</p>
                    <h4>45 Years Of Experience In<br></br> Luxury Real Estate</h4>
            </div>

            <div className='about-mid3-container'>
                <form className='about-mid3'>

                    <div className='about-testimonial-wrapper'>
                        <div className='person-block1'>
                            <img className='person-img-about' src='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-1-1-1536x967.jpg' alt='not_found'/>
                            <p>“Buying real estate is not only the best way, the quickest way, the safest way, but the only way to become wealthy.”</p>
                            <h4>Blair Owens</h4>
                                    
                        </div>

                        <div className='person-block2'>

                            <h4>Industry Leading Agency</h4>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
                            
                            <h4>Tailormade End-To-End Service</h4>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
                            
                            <h4>$125 Billion In Sales</h4>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
                                    
                        </div>

                        <div className='features-about'>
                            <h5>Get To Know Us</h5>
                            <h4>Meet The Blair Owens Team</h4>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim.</p>

                            </div>
                        </div>
                            
                    </div> 

                </form>

            </div>
            
            <div className='about-cards-container'>
                <div>
                    <AboutCards
                        imgUrl='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/H2-1.jpg'
                        name='Blair Owens'
                        occupation='Broker'
                    />
                </div>
               
                <div>
                    <AboutCards
                        imgUrl='https://elementor1.contempothemes.com/wp-content/uploads/2020/09/hs-5-1-1-1-1.jpg'
                        name='Evan Carter'
                        occupation='Agent'
                    />
                </div>
               
                <div>
                    <AboutCards
                        imgUrl='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/agent-3-1.jpg'
                        name='Jesse Hayes'
                        occupation='Agent'
                    />
                </div>
               
                <div>
                    <AboutCards
                        imgUrl='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/agent-4-1.jpg'
                        name='Shawna Harwick'
                        occupation='Agent'
                    />
                </div>
               
                <div>
                    <AboutCards
                        imgUrl='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/agent-5-1.jpg'
                        name='Riley Harper'
                        occupation='Marketing'
                    />
                </div>

                <div className='about-cards-container'>
                    <div className='about-card-words'>
                    <h4>“I couldn’t be more impressed with the team at Blair Owens, they found my family our perfect dream home.”</h4>
                    <p>The Cross Family</p>
                
                    </div>
        </div>
           
            </div>
            <br></br>
            <br></br>
            <br></br>
               
        </div>
    )
}