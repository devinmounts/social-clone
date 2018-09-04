import React from 'react';

function Links (){
  let linkStyling = {
    display: "inline-block",
    border: "1px solid black",
    padding: "0 10px"
  }
  return(
    <div>
      <div style={linkStyling}>Home</div>
      <div style={linkStyling}>Notifications</div>
      <div style={linkStyling}>Messages</div>
    </div>
  );
}

export default Links;
