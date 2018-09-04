import React from 'react';
import StatusUpdate from './StatusUpdate';
import StatusBox from './StatusBox';

function Feed (){
  let myStyledFriendsBox = {
    margin: "1.5%",
    width: "40%",
    display: "inline-block",
    verticalAlign: "top",
    border: "1px solid grey"
  }
  return(
    <div style={myStyledFriendsBox}>
      <StatusUpdate />
      <StatusBox />
    </div>

  );
}

export default Feed;
