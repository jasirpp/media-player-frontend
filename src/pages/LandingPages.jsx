import React from 'react'
import { Col,Row,Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPages() {
  const navigateByUrl =useNavigate()
  return (
    <>
      <Row className='mt-5 mb-5 align-items-center justify-content-between w-100'>
        <Col/>
        <Col lg={5}>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laboriosam eaque delectus excepturi quae perspiciatis, nostrum repellendus quidem ad? Et, sit reprehenderit soluta nesciunt nisi totam qui voluptatibus odio maxime.</p>
          <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn btn-info'>Get Started</button>
        </Col>
        <Col/>
        <Col lg={5}>
          <img src="https://media1.tenor.com/images/52f493bcc74deeded743cf55f25f0636/tenor.gif?itemid=5934248" className='img-fluid' />
        </Col>
      </Row>

      <div className="container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column">
        <h3>Features</h3>
        <div className="cards mt-5 mb-5 d-flex align-items-cener justify-content-between w-100">
          <Card className='p-3' style={{width:'22rem'}}>
            <Card.Img variant='top' width={'250px'} height={'250px'} src='https://www.hitechanimationstudio.com/assets/images/blog/hitech-presentation-thumbnail.jpg'/>
            <Card.Body>
              <Card.Title>Categorise Videos</Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium assumenda obcaecati et minus, aliquid magnam
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='p-3' style={{width:'22rem'}}>
            <Card.Img variant='top' width={'250px'} height={'250px'} src='https://images.ctfassets.net/63bmaubptoky/lp_F77LYpsLp18ilKLyaG8EUmHeHi_14xADfDAlPqCw/e5efecae4ee19461056f81631f7b6bf7/Best-free-video-editing-software-AU-Capterra-Header.png'/>
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium       assumenda obcaecati et minus, aliquid magnam
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='p-3' style={{width:'22rem'}}>
            <Card.Img variant='top' width={'250px'} height={'250px'} src='https://th.bing.com/th/id/OIP.tkbfg_FkbQklSHOwOL_u3wHaDt?w=760&h=380&rs=1&pid=ImgDetMain'/>
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium assumenda obcaecati et minus, aliquid magnam
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="container border rounded p-5 border-secondary mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
        <div className="col-lg-5">
          <h3 className='mb-5 text-warning'>Simple, Fast and Powerful</h3>
          <h6 className='mb-3'> <span className='fs-5 fw-bolder'>Play Everything </span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos </h6>
          <h6 className='mb-3'> <span className='fs-5 fw-bolder'>Categorise Videos </span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos </h6>
          <h6 className='mb-3'> <span className='fs-5 fw-bolder'>Managing History </span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos </h6>
        </div>
        <div className="videos col-lg-6">
          <iframe width={'100%'} height="315" src="https://www.youtube.com/embed/9_xMvx-vnJ0?si=Rkknb0wqPL8dOzgd" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </>
  )
}

export default LandingPages