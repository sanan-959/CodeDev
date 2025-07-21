import React from "react";
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({show, handleClose, title, children, onSave})=>{
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                {/* Model Title */}
                <Modal.Title>{title || 'Model Title'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Model Body */}
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} >Close</Button>
                <Button variant="primary" onClick={onSave}>Save</Button>
            </Modal.Footer>

        </Modal>
    )
}

export default CustomModal;