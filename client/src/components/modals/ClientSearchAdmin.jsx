import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import axios from 'axios';


const SearchClient = () => {
    
    const PF = "http://localhost:5000/images/";
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [pay, setPayment] = useState([]);

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

    const fetchPayment = async () => {

        const response = await axios.get(`http://localhost:5000/api/clients/` + user_id)
        const pays = response.data
        if (pays) {
            setName(response.data['name']);
            setAddress(response.data['address']);
            setEmail(response.data['email']);
            setGender(response.data['gender']);
            setMobileNo(response.data['mobile_no']);
            setNic(response.data['nic']);
            setAge(response.data['age']);
            setPaymentMethod(response.data['payment_method']);
            setPrograms(response.data['programs']);
            setTrainer(response.data['trainer']);
            setProfilePic(response.data['profile_pic']);

            console.log(pays)
            setShow(true)
        } else {
            alert('ID is not valid')
        }
    }

    function searchId(e) {

        if (e.keyCode === 13) {
            fetchPayment()
            console.log(pay)

        }
    }





    return (
        <>
            <div className="d-none d-md-flex ms-4 d-flex m-2 ">
                <input className="form-control bg-dark border-1 rounded" type="search" placeholder="Search" onChange={(e) => setUserId(e.target.value)} value={user_id} onKeyDown={searchId} style={{ backgroundColor: "#8c9399!important", color: "white", height: "45px" }} />
            </div>
            <Modal show={show}
                onHide={handleClose}
                size="lg"
                centered

            >

                <Modal.Header closeButton style={{ backgroundColor: "#ffff" }}>

                </Modal.Header>

                <Modal.Body style={{ backgroundColor: "#ffff" }}>

                    <div className="card mb-3" style={{ borderRadius: ".5rem", backgroundColor: "grey"}}>
                        <div className="row g-0">
                            <div className="col-md-4 gradient-custom text-center text-white"
                                style={{ borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem" }}>
                                <img src={PF+ profile_pic}
                                    alt="Avatar" className="img-fluid my-5" style={{ width: "200px" }} />
                                
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h5>Client Details</h5>
                                    <hr className="mt-0 mb-4" />
                                    <div className="row pt-1">
                                        <div className="col-6 d-flex">
                                            <h6 className='col-4 text-light '>Name :</h6>
                                            <p className="col-8 text-light">{name}</p>
                                        </div>
                                        <div className="col-6 d-flex">
                                            <h6 className='col-4 text-light'>NIC :</h6>
                                            <p className="col-8 text-light">{nic}</p>
                                        </div>
                                    </div>
                                    <div className="row pt-1">
                                        <div className="col-6 d-flex">
                                            <h6 className='col-4 text-light'>Gender :</h6>
                                            <p className="col-8 text-light">{gender}</p>
                                        </div>
                                        <div className="col-6 d-flex">
                                            <h6 className='col-4 text-light'>Age :</h6>
                                            <p className="col-8 text-light">{age}</p>
                                        </div>
                                    </div>
                                    <div className="row pt-1">
                                        <div className="col-6 d-flex">
                                            <h6 className='col-4 text-light'>Email : </h6>
                                            <p className="col-8 text-light">{email}</p>
                                        </div>
                                        <div className="col-6 d-flex">
                                            <h6 className='col-4 text-light'>Phone : </h6>
                                            <p className="col-8 text-light">{mobile_no}</p>
                                        </div>
                                    </div>
                                    <div className="row pt-1">
                                        <div className="col-6  mb-3  d-flex">
                                            <h6 className='col-4 text-light'>Address :</h6>
                                            <p className="col-8 text-light">{address}</p>
                                        </div>
                                    </div>
                                    <h5>Selections</h5>
                                    <hr className="mt-0 mb-4" />
                                    <div className="row pt-1">
                                        <div className="col-6 mb-3 d-flex">
                                            <h6 className='col-5 text-light'>Programs:</h6>
                                            <p className="col-7 text-light">{programs}</p>
                                        </div>
                                        <div className="col-6 mb-3 d-flex">
                                            <h6 className='col-4 text-light'>Trainer :</h6>
                                            <p className="col-8 text-light">{trainer}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>


        </>
    );
}
export default SearchClient;