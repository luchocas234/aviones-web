import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Power } from "./components/power/Power";
import { Speed } from "./components/speed/Speed";
import { Handling} from './components/handling/Handling'
import { Options } from "./components/options/Options";
import { Contact } from "./components/contact/Contact";

function App() {
  return (
   <>
   <Navbar/>
   <Power/>
   <Speed/>
   <Handling/>
   <Options/>
   <Contact/>
   </>
  );
}

export default App;
