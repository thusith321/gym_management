import React, { useEffect, useState } from 'react'
import axios from'axios'
import SideNav from '../components/SideNav';
import DeleteTrainerModel from '../components/modals/DeleteTrainerModel';
import UpdateTrainerModel from '../components/modals/UpdateTrainerModel';
import SearchTrainer from '../components/modals/TrainerSearchAdmin';
import TrainerGenerateReport from '../components/modals/TrainerGenerateReport';


export default function TrainerAdminView(props) {

    const[trainer,setTrainer] = useState([]);

  
    useEffect(() => {
        getdata()
    
      })

      const getdata =()=>{
        axios.get("http://localhost:5000/api/trainers/")
    
        .then(res => {   
            setTrainer(res.data);
            
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
                            <SearchTrainer />
                            <div>

                                <TrainerGenerateReport />
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
                                <th scope="col">Trainer ID</th>
                                <th scope="col">Name</th>
                                {/* <th scope="col">Address</th> */}
                                <th scope="col">Email</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">ID Number</th>

                                <th scope="col-2">Action</th>
                             
                            </tr>
                        </thead>
                        <tbody style={{color:"white"}}>
                            {trainer.map(es=>(
                            <tr key={es.trainer_id}>
                                <td>{es.trainer_id}</td>
                                <td>{es.name}</td>
                                {/* <td>{es.address}</td> */}
                                <td>{es.email}</td>
                                <td>{es.gender}</td>
                                <td>{es.mobile_no}</td>
                                <td>{es.nic}</td>

                                
                                <div class="container">
                                <div class="row">
                                    <div class="col-2 me-4">
                                    <UpdateTrainerModel eid={es.trainer_id} getdata={getdata}/>
                                    </div>
                                    <div class="col-2">
                                    <DeleteTrainerModel eid={es.trainer_id} getdata={getdata}/>
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

