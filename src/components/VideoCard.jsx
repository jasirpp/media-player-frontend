import React, { useState } from 'react'
import { Card,Modal } from 'react-bootstrap'
import { addToHistory, deleteAVideos } from '../services/allAPI';

function VideoCard({displayData,setdeleteVideoStatus,insideCategory}) {
  const [show,setShow] = useState (false)

  const handleClose = () => setShow(false);

  const handleShow = async () => {
    setShow(true)
    const {caption,embedLink} = displayData
    let today = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'}).format(today)
    let videoDetails = {
      caption,embedLink,timeStamp
    }
    await addToHistory(videoDetails)
  };

  const removeVideo = async (id)=>{
    await deleteAVideos(id)
    setdeleteVideoStatus(true)
  }

  const dragStarted = (e,id)=>{
    console.log(id);
    e.dataTransfer.setData("card id : ",id)
  }

  return (
    <>
      <Card className='mb-3' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
        <Card.Img onClick={handleShow} variant='top' height={'180px'} src={displayData?.url}/>
        <Card.Body>
          <Card.Title className='d-flex justify-contet-between align-items-center'>
            <h6>{displayData?.caption}</h6>
            {
            insideCategory? ""
            :
            <button onClick={()=>removeVideo(displayData?.id)} className='btn text-danger'><i className='fa-solid fa-trash fs-5'></i></button>
            }
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width={"100%"} height="360" src={`${displayData?.embedLink}?autoplay=1`} title={displayData?.caption} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard