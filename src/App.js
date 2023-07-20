import './App.css';
import Side from './Components/Side';
import Main from './Components/Main';
import Side1 from './Components/Side1';
import Myasign from './Components/Myasign';
import Second from './Components/Second';
import Add from './Components/Add';
import Card1 from './Components/Card1';
import Card2 from './Components/Card2';
import { useState } from 'react';
import Search from './Components/Search';
import Search1 from './Components/Search1';

function App() {

 const[item,setItem] = useState(false);
 const[bol1,setBol1] = useState(false);
 const[mob,setMob] = useState(false);

 function handleNav(){
  setItem(!item);
  console.log("print")
 }

 function handleBol(){
  setBol1(!bol1);
 }

 function mobileTab(){
  setMob(!mob);
 }


  return (
    <div className="App1">


   {
    mob ?   ( <div className="mobile-first-one">
    <Myasign checkFun={handleNav} newFunction = {mobileTab}/>
    <Card1/>
    <Second/>
    <Add checkFun={handleBol}/>
    <Card2/>
    <Card2/>
    <Card2/>
    <Card2/>
    <Card2/>
    <div className="searchbarone">
    {
        bol1 ? (<Search1 checkFun={handleBol}/>) : ""
      } 
    </div>
    
    <div className='sidehandle'>
      {
        item ? (<Side1 checkFun={handleNav}/>) : ""
      }  
      </div>

      {/* <div className="searchbar">
        
      </div> */}
    </div>
    ) : ( <div className='me-one'><Main newFunction = {mobileTab}/> </div>)
   }
    
    
    
    
    </div>
  );
}

export default App;

// {/* <div className="sideview">
// <div className="side-1">
//   <Side />
// </div>
// </div>
// <div className="side-2">
  
//   <Main />
// </div> 



//   {/* <Side1/> */}
//   <Myasign/>
//   <Second/>
//   <Add/>
//   */

// }