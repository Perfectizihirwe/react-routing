import React from 'react'
import './HomeCards.css'

function HomeCards(props) {
  return (
    <>
     <form className='home-card'>
        <div className='home-card-img'>
            <img className='img1' src={props.imageUrl} alt="image_not_reachable"/>
            <h5 className='home-card-text1'> {props.headertxt}</h5>
            <p className='home-card-text2'>{props.ptxt}</p>
        </div>
        
   
      </form>
   <br></br>

    </>

  )
}
export default HomeCards;

