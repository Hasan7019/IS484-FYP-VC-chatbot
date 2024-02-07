import React from "react";
import Link from "next/link";

// functional component for buttons in the services page.
// it is called separately for each button and accepts
// item name as props
const ChatBarSubmitButton = ({ item }) => {
  return (
    // currently, link will lead to log-in page
    <>
    <button><Link href="/newChat" className="w-full h-full border">
      Let's go
    </Link></button>
    </>
    
    
  );
};

export default ChatBarSubmitButton;
