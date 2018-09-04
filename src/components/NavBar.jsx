import React from 'react';
import Links from './NavLinks';
import Search from './Search';
import Tweet from './Tweet';

function NavBar (){
  let navBarStyling = {
    backgroundColor:"white"
  };
  let inlineDivStyling = {
    display:"inline-block",
    width:"33%"
  };
  return(
    <div style={navBarStyling}>
      <div style={inlineDivStyling}>
        <Links />
      </div>
      <div style={inlineDivStyling}>
        <Search />
      </div>
      <div style={inlineDivStyling}>
        <Tweet />
      </div>
    </div>
  );
}
export default NavBar;
