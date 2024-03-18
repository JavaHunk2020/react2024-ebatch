import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Login()  {

//inputData ={username:'',password=''}
 const [inputData, setInputData]=useState({username:'',password:''});

 const [cmessage, setCmessage]=useState('Error Message');

   //General method to update the fields
const updateFormData = (event)=> {
    const {name,value}= event.target;
    setInputData({...inputData,[name]:value});
}

/*
 const setUsername= (event)=> {
    //Reading value from text field 
    let value=event.target.value;
    setInputData({...inputData, username:value});
}

const setPassword= (event)=> {
    //Reading value from text field 
    let value=event.target.value;
    setInputData({...inputData, password:value});
}*/



 const checkLogin=()=>{

    if("jack"==inputData.username && "jill"==inputData.password){
        setCmessage("Ahah username and password are matched");
    }else{
        setCmessage("Ahah username and password are not matched");
    }
  
 }


  const mystyle = {
    width:"300px"
  };

  const messageStyle = {
    width: "500px",
    fontSize: "18px",
    fontWeight: "bold"
  };


 

  //JSX
  return (
    <div className="container">
      <h1>Login Page {inputData.username}</h1>
      <hr/>
      <img src="https://cdn-icons-png.freepik.com/512/9385/9385656.png" className="imageHeight"/>
      <img src="https://cdn-icons-png.freepik.com/512/9385/9385656.png" className="imageHeight"/>

        <div className="form-group">
        <label>Username :</label> 
        <input onChange={updateFormData} value={inputData.username} type="text" name="username" style={mystyle}  className="form-control"/>
        </div>
        <br/>

        <div className="form-group">
        <label>Password :</label> 
        <input onChange={updateFormData} type="password" name="password" style={mystyle}  className="form-control"/>
        </div>
        <br/>
         <div className="form-group">
          <button onClick={checkLogin} type="button" className="btn btn-warning">Login</button>
             
        </div>
         <br/>
        <span id="smessage" style={messageStyle}>{cmessage}</span>

    </div>
  );
}

export default Login;
