import React, { useEffect, useState } from 'react'
import axios from'axios'
import SideNav from '../components/SideNav';
import DeleteEquipmentModel from '../components/modals/DeleteEquipmentModel';
import UpdateEquipmentModel from '../components/modals/UpdateEquipmentModel';
import SearchEquipment from '../components/modals/EquipmentSearchAdmin';
import EquipmentSearchAdmil from '../components/modals/EquipmentGenerateReport';


export default function EquipmentAdminView(props) {

    const[client,setClient] = useState([]);

  
    useEffect(() => {
        getdata()
    
      })

      const getdata =()=>{
        axios.get("http://localhost:5000/api/equipments/")
    
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
                            <SearchEquipment />
                            <div>

                                <EquipmentSearchAdmil />
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
                                <th scope="col">Adress</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">Service Date</th>
                                <th scope="col">Number of Item</th>
                                <th scope="col">price</th>
                                <th scope="col">Paid?</th>
                                
                                <th scope="col-2">Action</th>
                             
                            </tr>
                        </thead>
                        <tbody style={{color:"white"}}>
                            {client.map(es=>(
                            <tr key={es.e_id}>
                                <td>{es.e_id}</td>
                                <td>{es.name}</td>
                                {/* <td>{es.address}</td> */}
                                <td>{es.email}</td>
                                <td>{es.address}</td>
                                <td>{es.mobile_no}</td>
                                <td>{es.sdate}</td>
                                <td>{es.nitem}</td>
                                <td>{es.price}</td>
                                <td>{es.paid}</td>
                                
                                
                                
                                <div class="container">
                                <div class="row">
                                    <div class="col-2 me-4">
                                    <UpdateEquipmentModel eid={es.e_id} getdata={getdata}/>
                                    </div>
                                    <div class="col-2">
                                    <DeleteEquipmentModel eid={es.e_id} getdata={getdata}/>
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