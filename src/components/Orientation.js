import {useEffect, useState} from 'react'
import ReactPlayer from 'react-player'
//import  './Orientation.css'
function Orientation() {
   
  return (
    <>
   <div>
    <p></p>
    <p></p>
 <center><ReactPlayer url='https://www.youtube.com/watch?v=a_Bm5lb6Ts4&pp=ygUQbWFycHUgZm91bmRhdGlvbg%3D%3D'  ></ReactPlayer></center>   
    </div>
    <div>
    <h5>What role does your donation play in humanitarian relief efforts?</h5>
      
        <input id="above18" type="radio" name="age" value="yes"/>
        <label for="above18">Provide emergency aid during natural disasters and conflicts</label>
        <br></br>
        <input id="below18" type="radio" name="age" value="no"/> 
        <label for="below18">Support refugee resettlement programs</label>
       <br></br>
        <input id="bel18" type="radio" name="age" value="no"/>
        <label for="be18">Offer medical assistance and supplies to affected regions</label>
        <br></br>
        <input id="belo8" type="radio" name="age" value="no"/>
        <label for="be1o8">All of the above</label>
        
       <h5>What impact can your donation have on the lives of disadvantaged children?</h5>
        
        <input id="above18" type="radio" name="age" value="yes"/>
        <label for="above18">Provide access to quality education and learning materials
</label>
        <br></br>
        <input id="below18" type="radio" name="age" value="no"/> 
        <label for="below18">Enhance healthcare and nutrition programs</label>
       <br></br>
        <input id="bel18" type="radio" name="age" value="no"/>
        <label for="be18">Foster emotional well-being and psychological support</label>
        <br></br>
        <input id="belo8" type="radio" name="age" value="no"/>
        <label for="be1o8">All of the above</label>
    
    </div>
    </>
  )
}

export default Orientation
