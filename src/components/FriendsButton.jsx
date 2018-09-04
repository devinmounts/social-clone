import React from 'react';
import PropTypes from "prop-types";

function FriendsButton(friends){
  let myStyledFriendsButton = {
    backgroundColor: "crimson",
    margin: "5px",
    padding: "2px"
  };
  let imageStyles = {
    width:"30%",
    display:"inline-block"
  };
  let contentStyles = {
    width:"65%",
    marginLeft: "5%",
    display:"inline-block"
  };
  return(
    <div style={myStyledFriendsButton}>
      <img style={imageStyles} src={friends.image}/>
      <div style={contentStyles}>
        <h5>Name: {friends.name}</h5>
        <button>Click</button>
      </div>
    </div>

  );
}

FriendsButton.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
};

export default FriendsButton;
