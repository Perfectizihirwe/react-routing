
import '../../screens/ourProprties/style.css'
import './News.css'
import Services from '../../components/Services'
import { Link } from 'react-router-dom'

export const Nextpage= () =>{
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
        urlimg='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-4-1-1536x967.jpg'
        title='The Blair Owens Team Named #1 Brokerage In San Diego'
        />

        <Services
        urlimg='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-2-1-1536x967.jpg'
        title='New & Notable Luxury Properties In San Diego 2021'
        />

        <Services
        urlimg='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/2-1-1536x967.jpg'
        title='Trend Report: What’s “In” In Luxury Real Estate'
        />

 
        <br></br>
        <br></br>
        <br></br>
       <div className='news-page-manager-container'>
        <div className='news-page-manager'>
                <div>
                    <button><Link to={'/news'}>Previous Page</Link> <small>>></small></button>
                </div>
                <div>
                    <button>1</button>
                </div>
                <div >
                    <button className='one' style={{backgroundColor:"#151764", border: "1px solid aliceblue", color: "white", boxShadow:"3px 5px 151764"}}>2</button>
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