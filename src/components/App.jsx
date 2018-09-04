import React from "react";
import FriendsBox from "./FriendsBox";
import NavBar from "./NavBar";
import ProfileBox from "./ProfileBox";
import Feed from "./Feed";

function App(){
  return (
  <div>
    <NavBar/>
    <ProfileBox/>
    <Feed/>
    <FriendsBox/>
  </div>
  );
}

export default App;
