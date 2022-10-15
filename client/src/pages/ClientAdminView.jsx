import React, { useEffect, useState } from 'react'
import axios from'axios'
import SideNav from '../components/SideNav';
import DeleteClientModel from '../components/modals/DeleteClientModel';
import UpdateClientModel from '../components/modals/UpdateClientModel';
import SearchClient from '../components/modals/ClientSearchAdmin';
import ClientGenerateReport from '../components/modals/ClientGenerateReport';


export default function ClientAdminView(props) {

    const[client,setClient] = useState([]);

  
    useEffect(() => {
        getdata()
    
      })

      const getdata =()=>{
        axios.get("http://localhost:5000/api/clients/")
    
        .then(res => {   
            setClient(res.data);
            
        })
        .catch(err => {
          console.log(err);
        })
      }
    
    return (
        <div >
          
   
         
                        <SideNav />
                        <div className="row">
                        <div className="col-md-2">

                        </div>

                        <div className='col-10 d-flex justify-content-between align-self-center py-2' style={{padding:"0 35px"}}>
                            <SearchClient />
                            <div>

                                <ClientGenerateReport />
                            </div>

                        </div>
                    </div>

                  
          
            <br/>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-10 p-5">

        <div style={{background:"grey"}}>
                    <table className="table" >
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                {/* <th scope="col">Address</th> */}
                                <th scope="col">Email</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">ID Number</th>
                                <th scope="col">Age</th>
                                <th scope="col">Pyment Method</th>
                                <th scope="col">Programs</th>
                                <th scope="col">Trainer</th>
                                <th scope="col-2">Action</th>
                             
                            </tr>
                        </thead>
                        <tbody style={{color:"white"}}>
                            {client.map(es=>(
                            <tr key={es.user_id}>
                                <td>{es.user_id}</td>
                                <td>{es.name}</td>
                                {/* <td>{es.address}</td> */}
                                <td>{es.email}</td>
                                <td>{es.gender}</td>
                                <td>{es.mobile_no}</td>
                                <td>{es.nic}</td>
                                <td>{es.age}</td>
                                <td>{es.payment_method}</td>
                                <td>{es.programs}</td>
                                <td>{es.trainer}</td>
                                
                                <div class="container">
                                <div class="row">
                                    <div class="col-2 me-4">
                                    <UpdateClientModel eid={es.user_id} getdata={getdata}/>
                                    </div>
                                    <div class="col-2">
                                    <DeleteClientModel eid={es.user_id} getdata={getdata}/>
                                    </div>
                                </div>
                                </div>
                           
                                   
                                
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />
                    

                </div>
            </div>
            </div>
        </div>
    )
}