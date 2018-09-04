import React from 'react';

function ProfilePic() {
  let imageStyle = {
    position: "absolute",
    maxWidth: "80px",
    bottom: "-40px",
    left: "30px",
    borderRadius: "5px"
  }
  let backgroundStyle = {
    position: "relative",
    backgroundColor: "blue",
    height: "125px"
  }
  return(
    <div style={backgroundStyle}>
      <img style={imageStyle} src="https://cdn4.vectorstock.com/i/1000x1000/72/98/female-avatar-profile-icon-round-african-american-vector-18307298.jpg"/>
    </div>
  );
}

export default ProfilePic
