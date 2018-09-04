import React from 'react';
import FriendsButton from "./FriendsButton";


function FriendsBox (){
  let myStyledFriendsBox = {
    backgroundColor: "bisque",
    margin: "3%",
    width: "30%",
    display: "inline-block",
    verticleAlign: "top"
  }
  return(
    <div style={myStyledFriendsBox}>
      <h4>Friends Box</h4>
      <br/>
      {Friends.map((friend, index) =>
        <FriendsButton
          image = {friend.image}
          name = {friend.name}/>
      )}
    </div>

  );
}

const Friends = [
  {name: "Devin", image:"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"},
  {name: "Ryan", image:"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"},
  {name: "Elly", image:"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"}
];

export default FriendsBox;
