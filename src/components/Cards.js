import React from "react"
import './Cards.css'
import {BiHome} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlinePlusSquare} from 'react-icons/ai'
import {BsPlayCircle} from 'react-icons/bs'
import { SlCalender } from 'react-icons/sl'


function Cards(props){
    return (
        <>
           
            <div className="wrapper">
                
                <div className="card-container">

                
                    <div className="image-container">
                    
                        <img src={props.imgaUrl} alt="img-not-cound"/>
                        <i className="icon1"><BiHome/></i>
                        <i className="icon2"><AiOutlineHeart/></i>
                        <i className="icon3"><AiOutlinePlusSquare/></i>
                        <i className="icon4"><BsPlayCircle/>
                        <span>virtual Tour</span></i>
                        <i><span className="forsale">For sale</span></i>
                        
                    </div>
                    <div className="info">
                       <div className="info-1">
                            <h2>${props.price}</h2>
                            <p>Bed {props.bed} Bath {props.bath} Sq Ft {props.sqft}</p>
                            <p>{props.address}</p>
                            <p>{props.place}</p>
                       </div>
                        <div className="button-view">
                            <button>View</button>
                        </div>
                        

                    </div>
                    <div className="sub-date">
                        <div className="sub-calend">
                            <p><SlCalender/></p>
                            <>
                               <p>1 year ago</p>
                            </>
                        </div>
                        <div>
                            <p>Listing Office</p>
                        </div>
                        <div className="sub-names">
                           <div className="list-name">
                                <p>Blair Owens</p>
                                
                                
                            </div> 
                            <>
                              <p>Pacific Sotheby's Int'l Realty</p>
                            </>

                            
                        </div>
                                           

                    </div>

                </div>
                

            </div>
            
            
            

            
        </>
    )
}

export default Cards;