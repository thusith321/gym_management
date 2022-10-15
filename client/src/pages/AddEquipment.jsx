import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SideNav from '../components/SideNav';
import { Col, Row, Form } from "react-bootstrap";

export default function AddEquipment() {
 
  const [e_id, setEId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [sdate, setSdate] = useState("");
  const [mobile_no, setMobileNo] = useState("");
  const [price, setPrice] = useState("");
  const [nitem, setNitem] = useState("");
  const [paid, setPaid] = useState("");
  //const [programs, setPrograms] = useState("");
 // const [trainer, setTrainer] = useState("");
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
  
  const userData ={
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
  //  trainer,
    profile_pic
   
  }

  


    if(name.length === 0 || address.length === 0 || email.length === 0 || sdate.length === 0 || mobile_no.length === 0 || price.length === 0 || nitem.length === 0 || paid.length === 0   ){
      swal(" Fields Cannot empty !","Please enter all data !", "error");
    }else{
      if (file) {
        const data =new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        userData.profile_pic= filename;
        console.log(filename);
        try {
            axios.post("http://localhost:3000/api/upload", data);
        } catch (err) {
          alert(err)
        }
      }
  
      console.log(userData);
      axios.post("http://localhost:3000/api/equipments",userData)
      .then(function (response) {
        console.log(response);
        console.log(response.data)
        setName("");
        setAddress("");
        setEmail("");
        setSdate("");
        setMobileNo("");
        setPrice("");
        setNitem("");
        setPaid("");
      //  setPrograms("");
       // setTrainer("");
        swal({ text: "Successfully Added", icon: "success", button: "Okay!"}).then((res)=>{
          navigate(`/dash-view`,{replace:true});
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


                    <h2 className="h1-responsive font-weight-bold text-center my-4" style={{ color: "hsl(218, 81%, 95%)" }}>ADD EQUIPMENT</h2>


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
                                Add image
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
                            <input className="form-control" id="contact" type="email" placeholder="Contact Number" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            <label htmlFor="contact" style={{ fontSize: "16px" }}>Email</label>

                          </div>
                          <br />

                          <div className="form-floating mb-3">
                            <input className="form-control" id="contact" type="date" placeholder="Contact Number" value={sdate} onChange={(e)=>setSdate(e.target.value)}/>
                            <label htmlFor="contact" style={{ fontSize: "16px" }}>ServiceDate</label>

                          </div>
                          <br />

                          <div className="form-floating mb-3">
                            <input className="form-control" id="amount" type="tel" placeholder="Amount" value={mobile_no} onChange={(e)=>setMobileNo(e.target.value)}/>
                            <label htmlFor="amount" style={{ fontSize: "16px" }}>Mobile Number</label>

                          </div>

                          <br />

                        <div className="form-floating mb-3">
                          <input className="form-control" id="amount" type="text" placeholder="Amount" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                          <label htmlFor="amount" style={{ fontSize: "16px" }}>price</label>

                        </div>

                        <br />

                        <div className="form-floating mb-3">
                          <input className="form-control" id="amount" type="text" placeholder="Amount" value={nitem} onChange={(e)=>setNitem(e.target.value)}/>
                          <label htmlFor="amount" style={{ fontSize: "16px" }}>nitem</label>

                        </div>

                        <br />

                        <select className="form-select mb-4 text-grey" aria-label="Disabled select example" onChange={(e)=>setPaid(e.target.value)}>
                            <option selected style={{ fontSize: "16px" }}>paid Details</option>
                            <option selected>paid details</option>
                            <option value="paid">paid</option>
                            <option value="not paid">not paid</option>  
                          </select>

                          <br />

                         


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