
import '../../screens/ourProprties/style.css'
import './News.css'
import Services from '../../components/Services'
import { Link } from 'react-router-dom'

export const News= () =>{
    return (
             
    
    <>
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
        <div className='news-blog-header'>
            <h1>Our Blog</h1>
            <p>The Latest Real Estate News And Insights From San Diego, And Beyond.</p>
        </div>
        <div className='news-all-wrapper'>

        <Services
        urlimg='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-9-1.jpg'
        title='New Development: The Crosby Estates At Rancho Sante Fe'
        />

        <Services
        urlimg='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-8-1-1536x967.jpg'
        title='Highrise Penthouse Living In Downtown San Diego'
        />

        <Services
        urlimg='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-7-1-1536x967.jpg'
        title='New Development: The Bluffs At La Jolla Shores'
        />

        <Services
        urlimg='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-6-1-1536x967.jpg'
        title='Why You Should Overlook Cosmetic Issues When House Hunting'
        />

        <Services
        urlimg='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-5-1-1536x967.jpg'
        title='A Record Breaking Month: What Is Happening In The Market?'
        />

        <Services
        urlimg='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-3-1-1536x967.jpg'
        title='Traditional Vs. Open Floor Plans: Which One Is Right For You?'
        />
        <br></br>
        <br></br>
        <br></br>
       <div className='news-page-manager-container'>
        <div className='news-page-manager'>
                <div >
                    <button className='one' style={{backgroundColor:"#151764", border: "1px solid aliceblue", color: "white", boxShadow:"3px 5px 151764"}}>1</button>
                </div>
                <div>
                    <button>2</button>
                </div>
                <div>
                    <button><Link to={'/news/readmore/page2'}>Next Page</Link> <small>>></small></button>
                </div>
        </div>
       </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        </div>
    </>
    )
}