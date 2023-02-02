import HomeCards from '../../components/HomeCards'
import '../../screens/ourProprties/style.css'
import '../Communities/Communities.css'
import '../../components/Home'
import '../../components/HomeCards.css'
export const Communities = () =>{
    return (
        <div className="comm-wrapper">
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

            <div className="comm-mid-wrapper">
               
                        <div className='block1'>
                            <p><span>San Diego</span></p>
                            <p>Communities</p>
                        </div>
                        <div className='block2'><p>lorem loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed tellus felis, vulputate id eleifend sit amet, varius non ipsum.</p></div>
                    
            </div>
            <div className='comm-mid2'>
                    <p>Community</p>
                    <h4>Find The Most Amazing <br></br>Places In San Diego</h4>
            </div>

            <div className='comm-mid3-container'>
                        <form className='comm-mid3'>
                

                            <div className='comm-testimonial-wrapper'>
                                <div className='person-block1'>
                                    <img className='person-img-comm' src='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/la-jolla-1.jpg' alt='not_found'/>
                                    <p>Spotlight</p>
                                    <h4>La Jolla</h4>
                                    
                                    <p>La Jolla is an affluent neighborhood in San Diego, California. It occupies 7 miles of curving coastline along the Pacific Ocean within the northern city limits.</p>
                                    <h5>View More</h5>
                                </div>
                                <div className='person-block2'>

                                    <h4>Attractions</h4>
                                    
                                    <p>`“I couldn't be more impressed with the team at Blair Owens, they found my family our perfect dream home. True professionals from knowledge of the area, to the closing process and everything else in between — thank you!”`</p>
                                    
                                    <h4>Home Values</h4>
                                    
                                    <p>`“I couldn't be more impressed with the team at Blair Owens, they found my family our perfect dream home. True professionals from knowledge of the area, to the closing process and everything else in between — thank you!”`</p>
                                    
                                 <h4>Neighbohoods</h4>
                                    
                                    <p>`“I couldn't be more impressed with the team at Blair Owens, they found my family our perfect dream home. True professionals from knowledge of the area, to the closing process and everything else in between — thank you!”`</p>
                                    
                                </div>

                                <div className='features-Communities'>
                                    <h5>Luxury At Its Finest</h5>
                                    <h4>Featured Communities</h4>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim.</p>

                                    </div>
                                </div>
                            
                            </div> 

                        </form>

            </div>
            <section className='comm-buttom-cards-wrapper'>
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
            </section>
                    
        </div>
    )
}