import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import Data from "./data.json";
import { SectionDetails } from "./components/SectionDetails/SectionDetails";
import Login from "./components/Login/Login";
import axios from "axios"
import {useEffect,useState} from "react"


function App() {
  const[userdata,setUserData]=useState(null)
  const[loading,setLoading]=useState(true)
  useEffect(()=>{
    
    // axios({
    //   method: 'get',
    //   url: 'https://randomuser.me/api/'
      
    // })
    //   .then( (response) =>{
    //     setUserData( response.data.results[0])
    //     // console.log("useEffect--: once",  response.data.results[0])
    //   }).catch((error)=>{
    //     console.log("Error while loading user detail" , error.message)
    //   })
    loadDetails()
      
    },[])
  const loadDetails = () => {
    setLoading(true)
      
  //   console.log(Data.results);
    
  //   const obj={
  //     ...Data.results[0],
  //     name:{
  //       first:"suyash",
  //       last:"Suryawanshi",
  //       title:"Mr"
  //     }
        
      
  //   }
//     // setUserData(obj)
axios({
  method: 'get',
  url: 'https://randomuser.me/api/'
  
})
  .then( (response) =>{
    setUserData( response.data.results[0])
    // console.log("useEffect--: once",  response.data.results[0])
  }).catch((error)=>{
    console.log("Error while loading user detail" , error.message)
  }).finally(()=>{
    setLoading(false)
  })
   
  };
  
  return (
    // <h1>ddhjdhj</h1>
   <div className="main">
    
   <div className="login">
    <img src={userdata.picture.large} />
   <h6>Login Info</h6>
   <div className="userinfo">
<label >Username</label>
<p>{userdata.login.username}</p>
</div>
<div className="password">
<label >Password</label>
<p>{userdata.login.password}</p>
</div>
   </div>
    
    
   
    <div className="user-generator-page">
      <div className="header-section">
        <h4>{userdata.name.first} {userdata.name.last}</h4>
        <Button variant="dark" onClick={loadDetails}>
          Generate New User
        </Button>
      </div>
      <SectionDetails detail={userdata} />
    
      
    </div>
    </div>
   
     
  );
}

export default App;
