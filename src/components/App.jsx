import React from "react";
import FriendsBox from "./FriendsBox";
import NavBar from "./NavBar";
import ProfileBox from "./ProfileBox";

function App(){
  return (
  <div>
    <NavBar/>
    <ProfileBox/>
    <FriendsBox/>
  </div>
  );
}

export default App;
