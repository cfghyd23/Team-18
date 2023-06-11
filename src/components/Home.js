import React from 'react'
import img1 from '../images/marpu.jpg'

function Home() {
  return (
    <div className='text-center'>
        <p className="display-2 text-info">MARPU FOUNDATION</p>  
        <img src={img1} alt="w-10" />
        <p className='lead'>Marpu Foundation is a nationwide volunteering 
movement that inspires youth to volunteer and 
connect them to meaningful opportunities to serve 
the community.Marpu aims to create positive 
change agents in society,through the culture of 
volunteering</p>
    </div>
  )
}

export default Home
