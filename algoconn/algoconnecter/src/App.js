import React from "react";
import MyAlgoConnect from '@randlabs/myalgo-connect';
import './App.css'
import Untitled from './Untitled.png'
import Logoo from './Logoo.jpg'
import Connect from "./components/connect";
import Elements from "./components/Elements";
// import Algorand from "react-algorand";

// function App() {
//   return (
//     <Algorand color="primary" />
//   );
// }

function Popup(){

  const myAlgoConnect = new MyAlgoConnect({ disableLedgerNano: false });

  const settings = {
      shouldSelectOneAccount: false,
      openManager: false
    };

  const accounts = myAlgoConnect.connect(settings);

}

function App(){
  
  return(
    <div className="divi">

      <div className="Nav">
        <nav>
        <a href="#" className="a1">fiftygs</a>
        <a href="#" className="a2">fiftygs</a>
        <a href="#" className="a3">fiftygs</a>

        <span><img src={Logoo} alt="" className="logo"></img></span>
        <button onClick={Connect} className="button-84">Connect Algo Wallet</button>
        </nav>
      </div>

      <Elements/>
    </div>
  )
}




export default App;