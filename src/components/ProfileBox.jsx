import React from 'react';
import ProfilePic from './ProfilePic';
import ProfileInfo from './ProfileInfo';

function ProfileBox (){
  let boxStyle = {
    width: "25%",
    display: "inline-block",
    verticalAlign: "top",
    margin: "1.5%",
    border: "2px solid grey"
  }
  return(
    <div style={boxStyle}>
      <ProfilePic/>
      <ProfileInfo/>
    </div>

  );
}

export default ProfileBox;
