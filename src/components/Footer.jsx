import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{width:'100%',height:'300px'}}>
      <div className="footer-div d-flex justify-content-evenly w-100 flex-wrap">
        <div className="website" style={{width:'400px'}}>
          <h4>
            <i className="fa-solid fa-cloud-arrow-up"></i>{' '}
            Media Player
          </h4>
          <h6>Designed and built with all the love in the world by the Medai Player team with the help of our contributors.</h6>
          <h6>Code licensed by mj_jasir</h6>
          <p>Currenly v1.0.0</p>
        </div>
        <div className="links d-flex flex-column">
          <h4>Links</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>History</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h4>Guides</h4>
          <Link to={''} style={{textDecoration:'none',color:'white'}}>React</Link>
          <Link to={''} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
          <Link to={''} style={{textDecoration:'none',color:'white'}}>Routing</Link>
        </div>
        <div className="contact">
      <h4>Contact Us</h4>
      <div className="sub d-flex mt-3">
        <input type="text" className='form-control' placeholder='Enter your Email' />
        <button className='btn btn-primary ms-3'>Subscribe</button>
      </div>
      <div className="icons fs-4 d-flex justify-content-evenly mt-3">
        <Link to={'/'} style={{textDecoration:"none",color:'white'}} ><i className='fa-solid fa-envelope'></i></Link>
        <Link to={'/'} style={{textDecoration:"none",color:'white'}} ><i className='fa-solid fa-envelope'></i></Link>
        <Link to={'/'} style={{textDecoration:"none",color:'white'}} ><i className='fa-solid fa-envelope'></i></Link>
        <Link to={'/'} style={{textDecoration:"none",color:'white'}} ><i className='fa-solid fa-envelope'></i></Link>
      </div>
        </div>
      </div>
      <p>Copyright @ 2024 Media Player. Built with React.</p>
    </div>
  )
}

export default Footer