import React from "react";
import Navbar from "@/components/navBar";
import ServicesButton from "@/components/servicesButton";
import ChatBarSubmitButton from "@/components/chatBarSubmit";
// functional component for the services page
const page = () => {
  // name of buttons to be used as props
  
  return (
    <>
      <Navbar />
      <h1>ChatVenture</h1>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <label for="chatbar">Ask here</label><br />
      <input type="text" id="chatbar" name="chatbar" />
      <ChatBarSubmitButton/>


  
      
      
    </>
  );
};

export default page;
