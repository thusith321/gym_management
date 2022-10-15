import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Col, Row, Form } from "react-bootstrap";


export default function UpdateEquipmentModel(props) {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);

    const [e_id, setEId] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [sdate, setSdate] = useState("");
    const [mobile_no, setMobileNo] = useState("");
    const [price, setPrice] = useState("");
    const [nitem, setNitem] = useState("");
    const [paid, setPaid] = useState("");
   // const [programs, setPrograms] = useState("");
    //const [trainer, setTrainer] = useState("");
    const [profile_pic, setProfilePic] = useState("");

    const [file, setFile] = useState(null);



    const PF = "http://localhost:3000/images/";


    const userData = {
        e_id,
        name,
        address,
        email,
        sdate,
        mobile_no,
        price,
        nitem,
        paid,
        //programs,
       // trainer,
        profile_pic

    }

   

    const updateShow = () => {
        
        setEId(props.eid)
        axios.get('http://localhost:3000/api/equipments/' + props.eid).then(function (response) {
            setName(response.data['name']);
            setAddress(response.data['address']);
            setEmail(response.data['email']);
            setSdate(response.data['sdate']);
            setMobileNo(response.data['mobile_no']);
            setPrice(response.data['price']);
            setNitem(response.data['nitem']);
            setProfilePic(response.data['profile_pic']);
            setPaid(response.data['paid']);
            //setPrograms(response.data['programs']);
            //setTrainer(response.data['trainer']);
            setShow(true)

            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
            alert('invalid')
        });


    };

    function submitForm(e) {
        e.preventDefault();
        if (file) {
            const data =new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            userData.profile_pic= filename;
            try {
                axios.post("http://localhost:3000/api/upload", data);
            } catch (err) {
              alert(err)
            }
          }
        axios.put('http://localhost:3000/api/equipments/update/' + props.eid, userData)
            .then(function (response) {
                console.log(response.data)
                setName("");
                setAddress("");
                setEmail("");
                setSdate("");
                setMobileNo("");
                setPrice("");
                setNitem("");
                setPaid("");
                //setPrograms("");
               // setTrainer("");
                setShow(false);
                swal({ text: "Equipment Successfully Updated", icon: "success", button: "Okay!" }).then((value) => {
                    props.getdata()
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    }




    return (
        <>


            <button type="button" class="btn btn-primary" onClick={updateShow}>
                <i class="fas fa-pen"></i>
            </button>


            <Modal show={show}
                size="lg"
                centered
            >
                <Modal.Header>

                    <Modal.Title id="contained-modal-title-vcenter">Update Equipment Details</Modal.Title>

                </Modal.Header>
                <Modal.Body>




                    <div className='row justify-content-center'>
                        <Col sm={3}>
                            <fieldset>

                                <Form.Group className="p-2 bd-highlight d-flex flex-column justify-content-center" >

                                    <Col className='mb-4'>
                                        {
                                            file?(
                                                <img className='img-fluid rounded' src={URL.createObjectURL(file)} alt="" />
                                            ):(
                                                <img className='img-fluid rounded' src={PF+ profile_pic} alt="" />
                                            )
                                        }
                                    </Col>



                                </Form.Group>
                            </fieldset>
                        </Col>
                    </div>
                    <Col sm={10}>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="3">
                                Select image
                            </Form.Label>
                        
                            <Col sm="7">
                                <Form.Control type="file" id="fileInput" onChange={(e) => setFile(e.target.files[0])} required />
                            </Col>
                        </Form.Group>
                    </Col>
                        <div className='background-radial-gradient'>
                            <div className="container">
                                <div className="row">
                                    <div className="col">

                                        <div className="card" style={{ height: "1100px", background: "grey", marginTop: "50px" }}>
                                            <div className="card-body px-4 px-md-5">
                                                <section className="mb-4">

                                                    <h2 className="h1-responsive font-weight-bold text-center my-4" style={{ color: "hsl(218, 81%, 95%)" }}>Equipements</h2>


                                                    <div className="row">

                                                        <div className="col-md-9 mb-md-0 mb-5" >
                                                            <form id="contact-form" name="contact-form" action="mail.php" method="POST" onSubmit={submitForm}>

                                                                <div className="form-floating mb-3">
                                                                    <input className="form-control" id="bookingid" type="text" placeholder="Booking ID" value={name} onChange={(e) => setName(e.target.value)} />
                                                                    <label htmlFor="bookingid" style={{ fontSize: "16px" }} >Name</label>

                                                                </div>
                                                                <br />
                                                                <div className="form-floating mb-3">
                                                                    <input className="form-control" id="name" type="text" placeholder="Name" value={address} onChange={(e) => setAddress(e.target.value)} />
                                                                    <label htmlFor="name" style={{ fontSize: "16px" }}>Address</label>

                                                                </div>
                                                                <br />
                                                                <div className="form-floating mb-3">
                                                                    <input className="form-control" id="contact" type="text" placeholder="Contact Number" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                                    <label htmlFor="contact" style={{ fontSize: "16px" }}>Email</label>

                                                                </div>
                                                                <br />

                                                                <select className="form-select mb-4 text-grey" aria-label="Disabled select example" value={sdate} onChange={(e) => setSdate(e.target.value)}>
                                                                    <option selected style={{ fontSize: "16px" }}>Select sdate</option>
                                                                    <option value="Male">Male</option>
                                                                    <option value="Female">Female</option>
                                                                </select>

                                                                <br />

                                                                <div className="form-floating mb-3">
                                                                    <input className="form-control" id="amount" type="text" placeholder="Amount" value={mobile_no} onChange={(e) => setMobileNo(e.target.value)} />
                                                                    <label htmlFor="amount" style={{ fontSize: "16px" }}>Mobile Number</label>

                                                                </div>

                                                                <br />

                                                                <div className="form-floating mb-3">
                                                                    <input className="form-control" id="amount" type="text" placeholder="Amount" value={price} onChange={(e) => setPrice(e.target.value)} />
                                                                    <label htmlFor="amount" style={{ fontSize: "16px" }}>Price</label>

                                                                </div>

                                                                <br />

                                                                <div className="form-floating mb-3">
                                                                    <input className="form-control" id="amount" type="text" placeholder="Amount" value={nitem} onChange={(e) => setNitem(e.target.value)} />
                                                                    <label htmlFor="amount" style={{ fontSize: "16px" }}>nitem</label>

                                                                </div>

                                                                <br />

                                                                <select className="form-select mb-4 text-grey" aria-label="Disabled select example" value={paid} onChange={(e) => setPaid(e.target.value)}>
                                                                    <option selected style={{ fontSize: "16px" }}>Paid Details</option>
                                                                    <option value="paid">paid</option>
                                                                    <option value="not paid">not Paid</option>
                                                                </select>


                                                                <br />

                                                               

                                                                <br />

                                                               


                                                            </form>




                                                        </div>



                                                    </div>

                                                </section>

                                            </div>
                                        </div>
                                        <br />
                                    </div>


                                </div>
                            </div>


                        </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={submitForm}>
                        Update Equipment details
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Exit
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}