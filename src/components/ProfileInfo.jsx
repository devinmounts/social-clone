import React from 'react';


function ProfileInfo() {
let title = {
  textAlign: "right",
  fontSize: "14pt",
  margin: "10px 5px 20px"
}

let info = {
  textAlign: "center",
  width: "30%",
  margin: "1%",
  display: "inline-block",
  verticalAlign: "top"
}
  return(
    <div>
      <div style={title}>Profile Name</div>
      <div style={info}>Tweets</div>
      <div style={info}>Following</div>
      <div style={info}>Followers</div>
    </div>


  );
}

export default ProfileInfo;
