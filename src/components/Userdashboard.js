import {Outlet,NavLink} from 'react-router-dom'
import img1 from '../images/env.jpg'
import img2 from '../images/cert.jpg'
import img3 from '../images/economic.jpg'


function Userdashboard() {
  return (
    <div >
        {/* creating links */}
        <ul className="nav nav-pills justify-content-center">
        <li className="nav-item">
            <NavLink className="nav-link" to="orientation">Orientation</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="monitoring">Monitoring</NavLink>
        </li>
        </ul>
        {/* placeholder for components */}
        <div className="container text-center">
          <Outlet />
        </div>
        <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} alt="w-10" class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src={img2} alt="w-10" class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src={img3} alt="w-10" class="d-block w-100" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Userdashboard
