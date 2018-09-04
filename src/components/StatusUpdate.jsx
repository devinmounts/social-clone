import React from 'react';

function StatusUpdate (){
  let avatarStyle = {
    width:"45px",
    height:"45px",
    backgroundColor:"#92113d",
    margin: "0 auto"
  }
  let inlineFormStyle = {
    display:"inline-block",
    verticalAlign: "top",
    width:"79%"
  }
  let inlineAvatarStyle = {
    display:"inline-block",
    verticalAlign: "top",
    width:"20%"
  }
  let outerBoxStyle = {
    margin: "0rem 0px 1rem",
    backgroundColor: "#2196F3",
    padding:"20px 0"
  }
  let inputStyle = {
    width: "100%",
    height: "39px",
    margin: "0 -10px"
  }
  return(
    <div style={outerBoxStyle}>
      <div style={inlineAvatarStyle}>
        <div style={avatarStyle}></div>
      </div>
      <div style={inlineFormStyle}>
        <input style={inputStyle} type="text" placeholder="What's Happening..."></input>
      </div>
    </div>
  );
}

export default StatusUpdate;
