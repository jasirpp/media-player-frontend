import { Modal,Button,Form } from 'react-bootstrap'
import React, { useState } from 'react'
import { uploadVideo } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setupoladVideoResponse}) {
  const [video,setVideo] = useState ({
    id:"",caption:"",url:"",embedLink:""
  })
  const [show,setShow] = useState(false)
  const handleClose = ()=> setShow(false)
  const handleShow = ()=> setShow(true)
  const getEmbedLink = (e)=>{
    const {value} = e.target
    // console.log(value.slice(-11));
    if(value){
      const link = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedLink:link})
    }else{
      setVideo({...video,embedLink:""})
    }

  }
  const handleUpload = async ()=>{
    const {id,caption,url,embedLink} = video
    if(!id || !caption || !url || !embedLink){
      toast.warning("please fill the form completely...")
    }
    else{
      const response = await uploadVideo(video)
      // console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success(`${response.data.caption} video uploaded successfully`) 
        setupoladVideoResponse(response.data)
        setVideo({
          id:"",caption:"",url:"",embedLink:""
        })
        handleClose()
      }else{
        // console.log(response);
        toast.error("please provide unique id for uploading videos...")
      }
    }
  }
  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn'><i className='fa-solid fa-circle-plus fs-5'></i></button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload a video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <Form className='border border-secondary rounded p-3'>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Control type='text' placeholder='Enter Video ID' onChange={(e)=>setVideo({...video,id:e.target.value})}/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Control type='text' placeholder='Enter Video Caption' onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Control type='text' placeholder='Enter Video Image URL' onChange={(e)=>setVideo({...video,url:e.target.value})}/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Control type='text' placeholder='Enter Video Link' onChange={getEmbedLink}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className='btn btn-info'>Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer 
        position='top-center'
        theme='colored'
        autoClose={2000}
      />
    </>
  )
}

export default Add