import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, {  useState  } from 'react'

import axios from 'axios';
import swal from 'sweetalert'


export default function DeleteClientModel(props) {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [show, setShow] = useState(false);

    const DeleteShow = () => {
        console.log(props.user_id)
       
        axios.get("http://localhost:5000/api/clients/" + props.eid)
        .then(function (response) {
             
            
            setShow(true)


        }).catch(function (error) {
            console.log(error);
            alert('invalid')
        });


    };

    function submitForm(e){
        e.preventDefault();
        axios.delete(`http://localhost:5000/api/clients/delete/${props.eid}`)
            .then(function (response) {
                setShow(false);
                swal({ text: "Staff Successfully Deleted", icon: "success",buttons: {
                    cancel: { text: 'Cancel' },
                    confirm: { text: 'Confirm' },
                  }})
                  .then((value) => {
                    props.getdata()
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    }

  

    return (
        <>
           
            
            <button type="button" class="btn btn-danger" onClick={DeleteShow} >
                 <i class="fab fa-bitbucket"></i>
            </button>

            <Modal show={show}
             onClick={handleClose}
                md={2}
                centered
            >
                <Modal.Header  closeButton>

                    <Modal.Title id="contained-modal-title-vcenter">Delete client Details</Modal.Title>

                </Modal.Header>
                <Modal.Body>


                  <h5>Are you sure you want to remove Client Member?</h5>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={submitForm} >
                        Delete client Details
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Exit
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}