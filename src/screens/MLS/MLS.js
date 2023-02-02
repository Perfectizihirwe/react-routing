import '../ourProprties/style.css'
import './MLS.css'
import Cards from '../../components/Cards'

export const MLS = () =>{
    return (
        <div className='mls-wrapper'>
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
            
            <section className='mls-container'>
                <div className='mls-block1'>
                 <h4>map he</h4>

                </div>
                <div className='mls-block2-wrapper'>
                    <div className='mls-block-navbar'>
                        <div><button className='map'>MAP</button></div>
                        <div><button className='grid'>GRID</button></div>
                        <div><button className='save-search'> SAVE SEARCH</button></div>
                        <div className='mls-navlist'>
                            <label for="cities"></label>

                            <select name="status" className='mls-navlist'>
                                <option value="volvo">All stutus</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <br></br>
                    <div className='mls-block2'>
                        
                        <div className='cards'>
                            <Cards className='cards'
                            price={29000}
                                
                            imgaUrl='https://d37ukvrrv3in12.cloudfront.net/listings/ade198b0-743a-4386-bc48-6fb1142903ea/xl/2.jpg'
                        
                            bed={5}
                            bath={4}
                            sqft={4406}
                            address={'12969 Guacamayo Ct'}
                            place={'San Diego'}

                        />

                        </div>

                        <div className='cards'>
                            <Cards 
                            price={35000}
                                
                            imgaUrl='https://d37ukvrrv3in12.cloudfront.net/listings/67e261f0-e00a-4b44-a981-73e1901e42a9/xl/1.jpg'
                            bed={6}
                            bath={7}
                            sqft={44006}
                            address={'2432 Highland Ave'}
                            place={'National City, CA 91950'}


                        />

                        </div>
                        <div className='cards'>
                        
                            <Cards 
                                price={75000}
                                    
                                imgaUrl='https://d37ukvrrv3in12.cloudfront.net/listings/dc1e1b8b-a8a7-4ccf-808e-dc0018f33427/xl/2.jpg'
                                bed={3}
                                bath={2}
                                sqft={4106}
                                address={'2432 Highland Ave'}
                                place={'National City, CA 91950'}


                            />

                        </div>

                        <div className='cards'>
                            <Cards 
                            price={3545000}
                                
                            imgaUrl='https://d37ukvrrv3in12.cloudfront.net/listings/7ad6d1b4-b42b-4f37-a34b-21dfb0837faf/xl/2.jpg'
                            bed={8}
                            bath={9}
                            sqft={84606}
                            address={'2432 Highland Ave'}
                            place={'National City, CA 91950'}


                        />

                        </div>
                        
                        <div className='cards'>
                            <Cards 
                            price={85000}
                                
                            imgaUrl='https://d37ukvrrv3in12.cloudfront.net/listings/e5ba9c81-ae6d-40e7-bbc1-63d95533a41c/xl/1.jpg'
                            bed={5}
                            bath={4}
                            sqft={4406}
                            address={'2432 Highland Ave'}
                            place={'National City, CA 91950'}


                        />
                        </div>
                        <div className='cards'>
                            <Cards 
                            price={25000}
                                
                            imgaUrl='https://d37ukvrrv3in12.cloudfront.net/listings/67e261f0-e00a-4b44-a981-73e1901e42a9/xl/1.jpg'
                            bed={7}
                            bath={6}
                            sqft={4406}
                            address={'2432 Highland Ave'}
                            place={'National City, CA 91950'}


                        />
                        </div>
                
            
                
                
                
                    </div>
                    
                </div>
               

            </section>
            
        </div>
    )
}