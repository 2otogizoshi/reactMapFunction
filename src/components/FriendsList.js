import React from "react";

function FriendsList() {
  const friends = ["Jordyn", "Nikenzi", "jake"];

  return (
    <div>
      <h1>friendlist</h1>
      <ul>
        {friends.map(name => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;
