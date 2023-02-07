
import '../../screens/ourProprties/style.css'
import './News.css'
import Services from '../../components/Services'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { useState, useEffect } from 'react'


export const Nextpage= () =>{

     const [email, setEmail] = useState("");
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetchData();
    }, []);

    const handleEmailChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    };
    console.log(blogs, "blogs");

    
    const fetchData=  () => {
        axios({
            method: "GET",
            url: "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=48262bd238ea4e2f8885d992905f5474",

        }).then((response) => {
            setBlogs(response.data.articles);
        }).catch((error) =>{
            console.log(error);
        });
        
    };

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

        {blogs.map((item) => {
            if(item.urlToImage !== null) {
                return ( <Services
                    urlImg={item.urlToImage}
                    title={item.title}
                    description={item.description}
                    />
                );
            }
        })}
      
       

    
 
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