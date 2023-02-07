import React from "react"
import '../screens/News/News.css'
import './Services.css'
import { Link } from "react-router-dom"
// import { isHtmlElement } from "react-router-dom/dist/dom"




export default function Services(props){
    return(
   <>
     <div className='news-Wrapper'>
      
      

        <div className='news-cards-container'>
            <form className='news-cards'>
                <div className='news-image-1'>
                    
                    <img src={props.urlImg} alt="img-not found"/>

                </div>
                <div className='news-img-profile1'>
                    <div>
                    <img src='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/riley-profile.jpg' alt="img-not-found"/>
                    </div>
                    
                    <h1>{props.title}</h1>
                    
                    
                </div>
                <div className='news-cards-bottom'>
                    <h5>BY RILEY HAPPER IN OUR BLOG</h5>
                    <p>{props.description}</p>
                    <button className='news-button'><Link to={'/news/readmore'}target={"_blank"} style={{color: "white"}}>READ MORE</Link></button>
                </div>
            </form>
                
                
        </div>
    </div>
    
   </>
            
    )
}