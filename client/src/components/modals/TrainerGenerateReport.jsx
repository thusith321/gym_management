import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import ReactToPrint from 'react-to-print';
import "../../App.css"

export default function TrainerGenerateReport() {

    const[trainer,setTrainer] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const componentRef = useRef(null);

  
    useEffect(() => {
        axios.get("http://localhost:5000/api/trainers/")
    
        .then(res => {   
            setTrainer(res.data);
            
        })
        .catch(err => {
          console.log(err);
        })
    
      })
    

    return (
        <>

           <button type="button" onClick={handleShow} className="btn btn-info btn-grad float-end" style={{ width: "250px", height: "50px"}}>
           Genarate Report
            </button>
            <br />  <br />     

            <Modal show={show}
                onClick={handleClose}
                size="xl"
                centered

            >
                <Modal.Header closeButton style={{backgroundColor:"grey"}}>

                </Modal.Header>

                <Modal.Body style={{backgroundColor:"grey"}}>

                    <div className="container-fluid pt-4 px-4" ref={componentRef} >

                    <div className="row">
              
                <div className="col-md-9">

        <div style={{background:"grey"}}>
                    <table className="table" >
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Email</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">ID Number</th>
                              
                            </tr>
                        </thead>
                        <tbody style={{color:"white"}}>
                            {trainer.map(es=>(
                            <tr key={es.trainer_id}>
                                <td>{es.trainer_id}</td>
                                <td>{es.name}</td>
                                <td>{es.address}</td>
                                <td>{es.email}</td>
                                <td>{es.gender}</td>
                                <td>{es.mobile_no}</td>
                                <td>{es.nic}</td>

                                    
                                
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />
                    

                </div>
            </div>
            </div>
      
                        <br />

                    </div>


                </Modal.Body>
                <Modal.Footer style={{backgroundColor:"grey"}}>
                    <ReactToPrint
                        trigger={() => <Button variant="primary" style={{ "width": "300px", "height": "40px", "color": "white", borderRadius: "50px", background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%" }}>
                            Print Report
                        </Button>}
                        content={() => componentRef.current}


                    />



                </Modal.Footer>
            </Modal>
        </>
    );
}

