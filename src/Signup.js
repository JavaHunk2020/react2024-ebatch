import axios from "axios";
import React,{ useState,ChangeEvent } from "react";

import { API_SERVER } from "./config/constant";


const Signup = () =>{

    const [signupData,setSignupData]=useState({username:'',password:'',email:'',gender:'Female'});

    const [emessage,setEmessage]= useState('');
    
    //General method to update the fields
    const updateFormData = (event)=> {
          const {name,value}= event.target;
          setSignupData({...signupData,[name]:value});
    }

    const submitData = (event)=>{
          event.preventDefault();
          //make a API call
          console.log(signupData);  
          //Hey I wanted to make a http post call
          //baseURI - URI for signup API
          //signupData = JavaScript object which will be converted into 
          //JSON when it will travel over network using http protocol
          axios.post(`${API_SERVER}/signups`,signupData).then(response=>{
              console.log(response);
              if(response.status==200){
                  setEmessage("Signup is done successfully");
              } else{
                setEmessage(response.data.message);
              }
          }).catch((e) => {
               console.log(e);
               setEmessage(e.response.data.message);
          });
          }


    return (<div>
        <header className="SHeader">
        </header>
        <div className="container">
            <h2>Signup Page!!!!!!!!!!!</h2>
            <img id="img1" style={{height: "120px"}} src="https://tse2.mm.bing.net/th?id=OIP.kKIoNZb1w8VL4H0aDiF5uwHaHs&pid=Api&P=0&h=180"/>
        <img id="img2" style={{height: "120px"}} src="https://cdn-icons-png.flaticon.com/512/7022/7022927.png"/>
        <img id="img3" style={{height: "120px"}} src="https://tse2.mm.bing.net/th?id=OIP.kKIoNZb1w8VL4H0aDiF5uwHaHs&pid=Api&P=0&h=180"/>
        <hr/>
        <span className="Message">{emessage}</span>
          <form onSubmit={submitData}>
             <div className="form-group">
                   <label style={{fontWeight:"bold"}}>Username</label>
                   <input value={signupData.name}  onChange={updateFormData}  type='text'  name="username" className="form-control" style={{width:"50%"}}/>
             </div>
              <br/>
             <div className="form-group">
             <label style={{fontWeight:"bold"}}>Password</label>
                   <input onChange={updateFormData}  type='password' name="password" className="form-control" style={{width:"50%"}}/>
             </div>

             <div className="form-group">
             <label style={{fontWeight:"bold"}}>Email</label>
                   <input  onChange={updateFormData} type='email' name="email" className="form-control" style={{width:"50%"}}/>
             </div>

             <div className="form-group">
             <label style={{fontWeight:"bold"}}>Gender</label>
                   <select  value={signupData.gender} onChange={updateFormData} name="email" className="form-control" style={{width:"50%"}}>
                         <option value="Male">Male</option>
                         <option value="Female">Female</option>
                    </select>    
             </div>

             <div className="form-group">
              <br/> 
             <button  type="submit"  className="btn btn-primary">Singup</button>
             <button id="tclear"   type="reset"  className="btn btn-info mx-2">Clear</button>
             
             <button  type="button"  className="btn btn-danger mx-2">Login</button>
 
             </div>
          </form>
        
        </div>
      
     </div>);
}


export default Signup;