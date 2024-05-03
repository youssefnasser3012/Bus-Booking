import React from 'react';
import {Table,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";





const  showusers=()=>{

    
   

  

    return(
        <>
<div className="ubdate-routes p-5 ">
<h3 className='text-center m-3 pb-5'> update users</h3>
<div className="row justify-content-center pb-5">
    <Table striped bordered hover size="sm" responsive="md">
        <thead>
            <tr>
                
               
                <th><FaRegUserCircle size="1.4rem" />User Name</th>
                <th><BiLogoGmail size="1.4rem" />Email</th>
                
                <th><MdAdminPanelSettings size="1.5rem" />Current Role </th>
                
                <th>Event</th>
            </tr>
        </thead>
        <tbody>
            <tr>
               

             
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed@gmail.com</div></td>
              
              <td>
              <div className='mt-3 mb-3' style={{fontWeight:"bold"}}>traveler</div>
              
              <div style={{justifyContent:"center",display:"flex"}}>
              <div style={{width:"50%"}}>

              <Form.Select style={{  borderRadius: "20px" }} >
                                            <option>Select Role</option>
                                            <option value="Alexandria">ADMIN</option>
                                            <option value="Aswan">traveler</option>
                                          
                                        </Form.Select>

              </div>
              </div>
              
              </td>
             
             
            
                <td>
                <div className='row  mt-3'>
                <button className='btn btn-sm btn-warning mx-auto row m-2 ' style={{margin:"30px"}}  > update </button>{' '}
                <button className='btn btn-sm btn-danger mx-auto row m-2 ' >Delete</button>{'  '}
                    </div>
                </td>
            </tr>
        </tbody>
    
    </Table>
    
</div>
 <Link to='/ManageUsers'><div>Show users</div> </Link>
</div>



</>
)

    
    
    
    
    };
    export default showusers;