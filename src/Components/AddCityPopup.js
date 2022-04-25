import React, { useState, useRef } from 'react'
import Modal from "react-bootstrap/Modal"
import './AddCityPopup.scss'

function AddCityPopup(props) {
    const [title, setTitle] = useState("Loading Cities...");
    const inputElement = useRef();

    const {hideAddCityPopup,isAddCityPopupShow,updateCityName } = props
    
    const addCityPopupLoaded = () => {
        setTitle("Add New City");
        inputElement.current.focus();
        
      };

  return (
        <>
        <Modal show={isAddCityPopupShow} onHide={hideAddCityPopup} onEntered={addCityPopupLoaded}>
            <div className='modal-bg'>
            <Modal.Header className='bnone px-5'>
            <Modal.Title>{title}</Modal.Title>
                <button className='close-button border-0' onClick={hideAddCityPopup}><i class="bi bi-x-lg"></i></button>
            </Modal.Header>
            <Modal.Body >
                <div className='input-addcity'>
                    <input size="25" placeholder='Add title' ref={inputElement}/>
                </div>
            </Modal.Body>
            <Modal.Footer className='bnone footeraddcity'>
            <button className='button' id='close' onClick={hideAddCityPopup}>Close</button>
            <button className='button' onClick={(e) =>updateCityName(e,inputElement.current.value)}>Save</button>
            </Modal.Footer>
            </div>
        </Modal>
        </>
  )
}

export default AddCityPopup