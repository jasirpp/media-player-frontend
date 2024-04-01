import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allAPI'

function View({upoladVideoResponse}) {
  const [allvideos,setAllVideos] = useState([])
  const [deleteVideoStatus,setdeleteVideoStatus] = useState(false)
  const getAlluploadedVideos = async ()=>{
    const {data} = await getAllVideos()
    setAllVideos(data)
    // console.log(data);
  }
  useEffect(()=>{
    getAlluploadedVideos()
    setdeleteVideoStatus (false)
  },[upoladVideoResponse,deleteVideoStatus])
  // console.log(allvideos);
  return (
    <>
      <Row>
        {
          allvideos.length>0?
          allvideos.map(video=>(
            <Col sm={12} md={6} lg={4} xl={3} key={video?.id}>
              <VideoCard displayData = {video} setdeleteVideoStatus={setdeleteVideoStatus}/>
            </Col>
          ))
          :
          <p className='fw-bolder fs-5 text-danger'>Nothing to display...</p>
        }
      </Row>
    </>
  )
}

export default View