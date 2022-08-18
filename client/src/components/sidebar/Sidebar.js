import React, { useContext, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AppContext } from "../../context/appContext";
export default function Sidebar() {
  const user = useSelector((state) => state.user);
  const {
    socket,
    setMembers,
    members,
    setCurrentRoom,
    setRooms,
    privateMembersMsg,
    rooms,
    setPrivateMemberMsg,
    currentRoom,
  } = useContext(AppContext);
  function joinRoom(room, isPublic = true){
    if(!user){
      return alert('Please Login');
    }
    socket.emit('join-room', room);
    setCurrentRoom(room);
    if(isPublic){
      setPrivateMemberMsg(null)
    }

    //dispatch for notfications
  }
  useEffect(()=>{
    if(user){
      setCurrentRoom('general');
      getRooms();
      socket.emit('join-room', 'general');
      socket.emit('new-user');
    }
  },[]);
  socket.off("new-user").on("new-user", (payload) => {
    setMembers(payload);
  });
  function getRooms() {
    fetch("http://localhost:5001/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }

  
  if (!user) {
    return <></>;
  }

  return (
    <>
      <h2>Available Rooms</h2>
      <ListGroup>
        {rooms.map((room, index) => (
          <ListGroup.Item key={index} onClick={()=>{
            joinRoom(room)
          }} style={{cursor: 'pointer'}}
          active ={room === currentRoom}>{room} {currentRoom !== room &&<span></span>}</ListGroup.Item>
        ))}
      </ListGroup>
      <h2>Members</h2>
      <ListGroup>
        {members.map((member, index) => (
          <ListGroup.Item key={index}> {member.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
