import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SideNav from '../components/SideNav';
import { Col, Row, Form } from "react-bootstrap";

export default function AddTrainer() {
 
  const [trainer_id, setTrainerId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [mobile_no, setMobileNo] = useState("");
  const [nic, setNic] = useState("");
  const [profile_pic, setProfilePic] = useState("asd");
  const [file, setFile] = useState("");

  const navigate = useNavigate();

  const handleChange =  (e) => {
    if (!e.target.files) {
      return;
    }

    // handle the input...
    setFile(e.target.files[0]);
}

 

function submitForm(e){
  e.preventDefault();
  
  const trainerData ={
    trainer_id,
    name,
    address,
    email,
    gender,
    mobile_no,
    nic,
    profile_pic
   
  }

  


    if(name.length === 0 || address.length === 0 || email.length === 0 || gender.length === 0 || mobile_no.length === 0 || nic.length === 0  ){
      swal(" Fields Cannot empty !","Please enter all data !", "error");
    }else{
      if (file) {
        const data =new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        trainerData.profile_pic= filename;
        console.log(filename);
        try {
            axios.post("http://localhost:5000/api/upload", data);
        } catch (err) {
          alert(err)
        }
      }
  
      console.log(trainerData);
      axios.post("http://localhost:5000/api/trainers",trainerData)
      .then(function (response) {
        console.log(response);
        console.log(response.data)
        setName("");
        setAddress("");
        setEmail("");
        setGender("");
        setMobileNo("");
        setNic("");
        swal({ text: "Successfully Added", icon: "success", button: "Okay!"}).then((res)=>{
          navigate(`/dash-view2`,{replace:true});
        })
       
       
      })
     
    }
    
  }

    return (
        <div>
      
<SideNav/>

        <div className='background-radial-gradient'>
        <div>
          <div className="row">
          <div className="col-md-2"></div>
            <div className="col-md-10">

              <div className="card" style={{background: "grey", margin:"auto",width:"700px" }}>
                <div className="card-body px-4 px-md-5">
                  <section className="mb-4">


                    <h2 className="h1-responsive font-weight-bold text-center my-4" style={{ color: "hsl(218, 81%, 95%)" }}>Trainer</h2>


                    <div className="row">

                      <div className="col-md-12 mb-md-0 mb-5" >
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST" onSubmit={submitForm}>
                          
                    <div className='row justify-content-center'>
                        <Col sm={3}>
                            <fieldset>

                                <Form.Group className="p-2 bd-highlight d-flex flex-column justify-content-center" >

                                    <Col className='mb-4'>
                                        {file && (
                                            <img className='img-fluid rounded' src={URL.createObjectURL(file)} alt="" />
                                        )}
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
                                <Form.Control type="file" id="fileInput" onChange={handleChange} required />
                            </Col>
                        </Form.Group>
                    </Col>

                          <div className="form-floating mb-3">
                            <input className="form-control" id="bookingid" type="text" placeholder="Booking ID" value={name} onChange={(e)=>setName(e.target.value)} />
                            <label htmlFor="bookingid" style={{ fontSize: "16px" }} >Name</label>

                          </div>
                          <br />
                          <div className="form-floating mb-3">
                            <input className="form-control" id="name" type="text" placeholder="Name"  value={address} onChange={(e)=>setAddress(e.target.value)}  />
                            <label htmlFor="name" style={{ fontSize: "16px" }}>Address</label>

                          </div>
                          <br />
                          <div className="form-floating mb-3">
                            <input className="form-control" id="contact" type="text" placeholder="Contact Number" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            <label htmlFor="contact" style={{ fontSize: "16px" }}>Email</label>

                          </div>
                          <br />

                          <select className="form-select mb-4 text-grey" aria-label="Disabled select example" onChange={(e)=>setGender(e.target.value)}>
                            <option selected style={{ fontSize: "16px" }}>Gender</option>
                            <option selected>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option> 
                          </select>

                          <br />

                          <div className="form-floating mb-3">
                            <input className="form-control" id="amount" type="text" placeholder="Amount" value={mobile_no} onChange={(e)=>setMobileNo(e.target.value)}/>
                            <label htmlFor="amount" style={{ fontSize: "16px" }}>Mobile Number</label>

                          </div>

                          <br />

                        <div className="form-floating mb-3">
                          <input className="form-control" id="amount" type="text" placeholder="Amount" value={nic} onChange={(e)=>setNic(e.target.value)}/>
                          <label htmlFor="amount" style={{ fontSize: "16px" }}>ID Number</label>

                        </div>


                        </form>
                        <br />

                        <div className="text-center">

                          <Link to="/payment-view">
                            <button type="button" className="btn btn-primary" style={{ width: "400px" }} onClick={submitForm}>
                              Submit
                            </button>
                          </Link>


                        </div>

                      </div>



                    </div>

                  </section>

                </div></div>
              <br />
            </div>

            
          </div>
        </div>


      </div>

       

        </div>
    )
}

