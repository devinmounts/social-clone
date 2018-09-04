import React from 'react';

function Status (status) {
  let outerStatusBox = {
    borderBottom: "1px solid grey"
  };
  let imageStyle = {
    maxWidth: "80px",
    borderRadius: "5px"
  };
  let imageDiv = {
    display: "inline-block",
    verticalAlign: "top",
    width:"20%",
    textAlign:"center"
  }
  let statusDiv = {
    display: "inline-block",
    verticalAlign: "top",
    width:"80%",
    textAlign:"left"
  }
  return (
    <div style={outerStatusBox}>
      <div style={imageDiv}>
        <img style={imageStyle} src="https://cdn4.vectorstock.com/i/1000x1000/72/98/female-avatar-profile-icon-round-african-american-vector-18307298.jpg"/>
      </div>
      <div style={statusDiv}>
        <h4>{status.name}</h4>
        <p>{status.status}</p>
      </div>
    </div>
  );
}

export default Status
