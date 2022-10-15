import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Col, Row, Form } from "react-bootstrap";


export default function UpdateClientModel(props) {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);

    const [user_id, setUserId] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [mobile_no, setMobileNo] = useState("");
    const [nic, setNic] = useState("");
    const [age, setAge] = useState("");
    const [payment_method, setPaymentMethod] = useState("");
    const [programs, setPrograms] = useState("");
    const [trainer, setTrainer] = useState("");
    const [profile_pic, setProfilePic] = useState("");

    const [file, setFile] = useState(null);



    const PF = "http://localhost:5000/images/";


    const userData = {
        user_id,
        name,
        address,
        email,
        gender,
        mobile_no,
        nic,
        age,
        payment_method,
        programs,
        trainer,
        profile_pic

    }

   

    const updateShow = () => {
        
        setUserId(props.eid)
        axios.get('http://localhost:5000/api/clients/' + props.eid).then(function (response) {
            setName(response.data['name']);
            setAddress(response.data['address']);
            setEmail(response.data['email']);
            setGender(response.data['gender']);
            setMobileNo(response.data['mobile_no']);
            setNic(response.data['nic']);
            setAge(response.data['age']);
            setProfilePic(response.data['profile_pic']);
            setPaymentMethod(response.data['payment_method']);
            setPrograms(response.data['programs']);
            setTrainer(response.data['trainer']);
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
                axios.post("http://localhost:5000/api/upload", data);
            } catch (err) {
              alert(err)
            }
          }
        axios.put('http://localhost:5000/api/clients/update/' + props.eid, userData)
            .then(function (response) {
                console.log(response.data)
                setName("");
                setAddress("");
                setEmail("");
                setGender("");
                setMobileNo("");
                setNic("");
                setAge("");
                setPaymentMethod("");
                setPrograms("");
                setTrainer("");
                setShow(false);
                swal({ text: "Client Successfully Updated", icon: "success", button: "Okay!" }).then((value) => {
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

                    <Modal.Title id="contained-modal-title-vcenter">Update Client Details</Modal.Title>

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
                                Select Profile Image
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

                                                    <h2 className="h1-responsive font-weight-bold text-center my-4" style={{ color: "hsl(218, 81%, 95%)" }}>Client</h2>


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

                                                                <select className="form-select mb-4 text-grey" aria-label="Disabled select example" value={gender} onChange={(e) => setGender(e.target.value)}>
                                                                    <option selected style={{ fontSize: "16px" }}>Select Gender</option>
                                                                    <option value="Male">Male</option>
                                                                    <option value="Female">Female</option>
                                                                </select>

                                                                <br />

                                                                <div className="form-floating mb-3">
                                                                    <input className="form-control" id="amount" type="text" placeholder="Amount" required maxlength="10" value={mobile_no} onChange={(e) => setMobileNo(e.target.value)} />
                                                                    <label htmlFor="amount" style={{ fontSize: "16px" }}>Mobile Number</label>
                                                                </div>

                                                                <br />

                                                                <div className="form-floating mb-3">
                                                                    <input className="form-control" id="amount" type="text" placeholder="Amount" value={nic} onChange={(e) => setNic(e.target.value)} />
                                                                    <label htmlFor="amount" style={{ fontSize: "16px" }}>ID Number</label>

                                                                </div>

                                                                <br />

                                                                <div className="form-floating mb-3">
                                                                    <input className="form-control" id="amount" type="text" placeholder="Amount" required maxlength="2" value={age} onChange={(e) => setAge(e.target.value)} />
                                                                    <label htmlFor="amount" style={{ fontSize: "16px" }}>Age</label>

                                                                </div>

                                                                <br />

                                                                <select className="form-select mb-4 text-grey" aria-label="Disabled select example" value={payment_method} onChange={(e) => setPaymentMethod(e.target.value)}>
                                                                    <option selected style={{ fontSize: "16px" }}>Payment Method</option>
                                                                    <option value="Monthly">Monthly</option>
                                                                    <option value="Annual">Annual</option>
                                                                </select>


                                                                <br />

                                                                <select className="form-select mb-4 text-grey" aria-label="Disabled select example" value={programs} onChange={(e) => setPrograms(e.target.value)}>
                                                                    <option selected style={{ fontSize: "16px" }}>Select Programs</option>
                                                                    <option value="Weight Loss">Weight Loss</option>
                                                                    <option value="Weight Gain">Weight Gain</option>
                                                                </select>

                                                                <br />

                                                                <select className="form-select mb-4 text-grey" aria-label="Disabled select example" value={trainer} onChange={(e) => setTrainer(e.target.value)}>
                                                                    <option selected style={{ fontSize: "16px" }}>Select Trainer</option>
                                                                    <option value="M.D. Perera">M.D. Perera</option>
                                                                    <option value="D.S. Ariyarathna">D.S. Ariyarathna</option>
                                                                </select>


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
                        Update Client
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Exit
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}