import React from "react";
import { ListGroup } from "react-bootstrap";
import {useSelector} from 'react-redux'
export default function Sidebar() {
  const rooms = ["first room", "second room", "third room"];
  const user = useSelector(state => state.user)
  if(!user){
    return <></>
  }
  return (
    <>
      <h2>Available Rooms</h2>
      <ListGroup>
        {rooms.map((room, index) => (
          <ListGroup.Item key={index}>{room}</ListGroup.Item>
        ))}
      </ListGroup>
      <h2>Members</h2>
    </>
  );
}
