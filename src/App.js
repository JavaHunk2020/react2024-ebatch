import logo from './logo.svg';
import './App.css';

function App() {

  const mystyle = {
    width:"300px"
  };

  const messageStyle = {
    width: "500px",
    fontSize: "18px",
    fontWeight: "bold"
  };

  const checkPrime = () => {
      let pnumObj=document.getElementById("pnum");
      let num=Number(pnumObj.value);
      console.log(num);
      let status=true;
      for(let x=2;x<num/2;x++){
           if(num%x==0) {
            status =false;
            break;
           }
      }
      if(status==true) {
        document.getElementById("smessage").innerHTML=`Hey ${num} is prime`;
      }else{
        document.getElementById("smessage").innerHTML=`Hey ${num} is not prime`;
      }
  }
 


  //JSX
  return (
    <div className="container">
      <h1>Prime Number</h1>
      <hr/>
      <img src="https://cdn-icons-png.freepik.com/512/9385/9385656.png" className="imageHeight"/>
      <img src="https://cdn-icons-png.freepik.com/512/9385/9385656.png" className="imageHeight"/>

      <div className="form-group">
        <label>Enter Number :</label> 
        <input type="text" id="pnum" style={mystyle}  className="form-control"/>
        </div>
        <br/>
         <div className="form-group">
          <button onClick={checkPrime} type="button" className="btn btn-warning">Check Prime!!!</button>
             
        </div>
         <br/>
        <span id="smessage" style={messageStyle}>Comming Soon!</span>

    </div>
  );
}

export default App;
