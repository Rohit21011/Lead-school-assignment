import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "./components/Input";
import Countries from "./components/Countries";




function App() {
  const [code, setCode] = useState("");
  const [postelCode, setPostelCode] = useState("");
  const [getInfo,setInfo] = useState("");
  const [loader,setLoader] = useState(true);
  const [getMessage,setMessage] = useState("");
  const hitApi = () => {
    
   
   if(postelCode){
    setMessage(<h3 className="text-center">Wait...</h3>);
    axios
    .get(`https://api.zippopotam.us/${code}/${postelCode}`)
    .then((data) =>{
      setInfo(data.data)
      setLoader(false);
    })
    .catch(() => alert("Enter valid zip code"));
   
   }
   else{
    alert("please enter zip code")
   }
  };

  return (
    <div className="layout">
      <div>
        
        <div>
          <Input onchange={(e) => setPostelCode(e.target.value)} />
        </div>
        <div>
          <Countries onchange={(e) => setCode(e.target.value)} />
        </div>
        <div>
          <button onClick={hitApi} type="submit">GET DATA</button>
        </div>
      
      </div>
      <div className="displayData">
        {
          loader?getMessage:(
            <>
            <div>
            <p>post code: {getInfo['post code']}</p>
            <p>country: {getInfo['country']}</p>
            <p>abrevation code: {getInfo['country abbreviation']}</p>
          </div>
          <div className="d-flex">
            <h2 className="text-center">places</h2>
            <div >
            <table className="table table-hover table-responsive">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">place name</th>
            <th scope="col">longitude</th>
            <th scope="col">State</th>
            <th scope="col">State Abbreviation</th>
            <th scope="col">latitude</th>
          </tr>
        </thead>
        <tbody>
        {getInfo['places'].map((place, key) => (
           <tr>
           <th scope="row">{key+1}</th>
           <td>{place['place name']}</td>
           <td>{place['longitude']}</td>
           <td>{place['state']}</td>
           <td>{place['state abbreviation']}</td>
           <td>{place['latitude']}</td>
         </tr>
               
              ))}
        </tbody>
      </table>
      <div style={{display:"flex",alignItems:"center"}}>
      <button onClick={()=>{
        setInfo("");
        setLoader(true);
        setMessage("");
      } }style={{padding:"5px",width:"300%"}}>RESET</button>  
      </div>
            </div>
          </div>
          </>
          )
        }
   
   

  {/* { getInfo && (
    <div>
      <p>post code: {getInfo['post code']}</p>
      <p>country: {getInfo['country']}</p>
      <p>abrevation code: {getInfo['country abbreviation']}</p>
    </div>
  )}

  {getInfo && (
    
    <div className="d-flex">
      <h2 className="text-center">places</h2>
      <div >
      <table className="table table-hover table-responsive">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">place name</th>
      <th scope="col">longitude</th>
      <th scope="col">State</th>
      <th scope="col">State Abbreviation</th>
      <th scope="col">latitude</th>
    </tr>
  </thead>
  <tbody>
  {getInfo['places'].map((place, key) => (
     <tr>
     <th scope="row">{key+1}</th>
     <td>{place['place name']}</td>
     <td>{place['longitude']}</td>
     <td>{place['state']}</td>
     <td>{place['state abbreviation']}</td>
     <td>{place['latitude']}</td>
   </tr>
         
        ))}
   
    
  </tbody>
</table>
<div style={{display:"flex",alignItems:"center"}}>
<button onClick={()=>setInfo("")} style={{padding:"5px",width:"300%"}}>RESET</button>  
</div>

      </div>
      
    </div>
  )} */}
</div>

      {/* {
        getInfo &&
         <div className="displayData">
          {console.log(getInfo)}
         <div>
          <p>post code:{getInfo?.getInfo['post code']}</p>
          <p>country:{getInfo?.getInfo['country']}</p> 
          <p>abrevation code:{getInfo?.getInfo['country abbreviation']}</p>
         </div>
         <div className="d-flex">
         <h2 className="text-center">places</h2>
          <div className="p-5">
           {getInfo?.getInfo['places'].map((place,key)=>(
            <div key={key}>
               <p>{place['place name']}</p>
               <p>{place['longitude']}</p>
               <p>{place['state']}</p>
               <p>{place['state abbreviation']}</p>
               <p>{place['latitude']}</p>
            </div>
           ))}
          </div>
         </div>
        </div>
      } */}
    </div>
  );
}

export default App;
