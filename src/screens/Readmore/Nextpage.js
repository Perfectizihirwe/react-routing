import '../ourProprties/style.css'
import '../Readmore/Readmore.css'
import React from 'react'

import {AiOutlineTwitter} from 'react-icons/ai'
import {GrLinkedinOption} from 'react-icons/gr'
import {GrFacebookOption} from 'react-icons/gr'
export const Nextpage = () =>{
  return (
      <div className='readmore_wrapper'>
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
        <div className='readmore-blog-header'>
            <div className='readmore-blog1'>
            <img src="https://elementor1.contempothemes.com/wp-content/uploads/2020/12/riley-profile.jpg" alt='image_not_found'/>
            </div>
            <h1>Traditional Vs. Open Floor Plans: Which <br></br>One Is Right For You?</h1>
            
        </div>
        <div className='readmore-mid-container'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis diam. Aenean non lacus arcu. Nam ligula felis, mattis vel interdum nec, tempus commodo arcu.</p>
            <p>Praesent aliquet lacus vel libero porttitor, at rhoncus erat tincidunt. Nunc sodales magna ut purus tempor gravida. Vestibulum quis pulvinar lacus, quis molestie turpis. In sit amet dui commodo, elementum diam vitae, placerat elit. Integer luctus nec ligula nec elementum. Ut fermentum purus a nibh pulvinar, sit amet tempus erat laoreet. Suspendisse bibendum eu purus quis convallis. Fusce eu pulvinar ante, quis aliquet purus.</p>
            <p>Nullam tristique leo finibus turpis sollicitudin, interdum gravida tortor ultrices. Fusce condimentum leo et arcu laoreet, eu ultrices turpis venenatis. Mauris ac lacus ac arcu tristique auctor id sed ante. Pellentesque volutpat luctus ex vel ultricies. Suspendisse potenti. Nam bibendum justo a arcu viverra tempus. Maecenas eget fringilla velit. Duis at libero eu turpis sagittis gravida at vitae magna. Integer quis porta quam. Duis gravida neque ex, ac mollis quam eleifend a.</p>
            <p>Sed nec faucibus sapien, ac bibendum ligula. Vivamus iaculis euismod cursus. Vivamus porttitor consectetur faucibus. Fusce bibendum vehicula enim, in posuere sapien tempus ac. Ut facilisis mi ac justo pharetra ullamcorper. Praesent sed lacus libero. Vestibulum vitae ipsum sed justo consectetur sagittis in vel sem. Aenean eleifend ultricies ex, sed laoreet eros imperdiet nec. Sed vitae neque eu tortor dapibus facilisis. Ut egestas mollis lectus posuere suscipit.</p>
            <p>Sed nec faucibus sapien, ac bibendum ligula. Vivamus iaculis euismod cursus. Vivamus porttitor consectetur faucibus. Fusce bibendum vehicula enim, in posuere sapien tempus ac. Ut facilisis mi ac justo pharetra ullamcorper. Praesent sed lacus libero. Vestibulum vitae ipsum sed justo consectetur sagittis in vel sem. Aenean eleifend ultricies ex, sed laoreet eros imperdiet nec. Sed vitae neque eu tortor dapibus facilisis. Ut egestas mollis lectus posuere suscipit.</p>
            <p>Maecenas commodo tincidunt justo vel faucibus. Morbi ullamcorper vehicula tellus, eget fringilla ipsum. In ut ante vitae ligula elementum fermentum. Fusce efficitur neque ac faucibus sodales. Pellentesque eu arcu dictum, convallis ante in, dictum ipsum. Maecenas ac nunc nec ex tristique tristique. Aliquam condimentum justo eu gravida tristique. Vivamus ipsum ante, ultrices in tincidunt vitae, pellentesque eget mauris. Praesent eleifend odio et tortor ullamcorper tempor. Donec tempor sodales quam sit amet molestie. Proin porttitor orci vitae elit faucibus gravida. In iaculis nulla sed urna imperdiet, a aliquet nunc blandit. Donec rhoncus aliquet commodo. Vestibulum gravida venenatis pharetra.</p>
        </div>
        <div className='readmore-mid2'>
            <p>Share This</p>
            <div className='readmore-icons-wrapper'>
                <div className='icons'><GrFacebookOption style={{fontSize: 25}}/></div>
                <div className='icons'><AiOutlineTwitter style={{fontSize: 25}}/></div>
                <div className='icons'><GrLinkedinOption style={{fontSize: 25}}/></div>
               
            </div>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
            <br></br>
            <br></br>

            <h4 style={{paddingLeft: 8, fontWeight:100, fontSize:18}}>Related Posts</h4>

            <div className='readmore-bottom'>
            <form className='readmore-cards'>
                <div className='readmore-image-1'>
                    <img src='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-9-1-1536x967.jpg' alt="img-not found"/>

                </div>
                <div className='readmore-description'>
                    <h1>New Development: The Crosby Estates At Rancho Sante Fe</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi... </p>
                </div>
            </form>

            <div className='readmore-cards'>
                <div className='readmore-image-1'>
                    <img src='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-8-1-1536x967.jpg' alt="img-not found"/>

                </div>
                <div className='readmore-description'>
                    <h1>Highrise Penthouse Living In Downtown San Diego</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi... </p>
                </div>
            </div>

            <form className='readmore-cards'>
                <div className='readmore-image-1'>
                    <img src='https://elementor1.contempothemes.com/wp-content/uploads/2020/12/b-post-7-1-1536x967.jpg' alt="img-not found"/>

                </div>
                <div className='readmore-description'>
                    <h1>New Development: The Bluffs At La Jolla Shores</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi... </p>
                </div>
            </form>
            
            <div>
                <div></div>
                <div></div>
            </div>
        
            </div>
        </div>
      </div>
  )}