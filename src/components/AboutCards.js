import React from 'react'
import '../screens/About/About.css'


export default function AboutCards(props) {
 
    return (
        <div className='about-cards-container'>
            <div className='about-card'>
                <img src={props.imgUrl} alt='image_not_found'/>
                <h2>{props.name}</h2>
                <p>{props.occupation}</p>
            </div>
        </div>
    )
  
}
