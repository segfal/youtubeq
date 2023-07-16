



import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useParams } from "react-router-dom";

const Room = () => {
  const navigate = useNavigate();
  const [roomNumber, setRoomNumber] = useState("");
 

  const changeRoom = () => {
    navigate(`/room/${roomNumber}`);
  };

  return (
    <div>
      <input
        type="text"
        value={roomNumber}
        onChange={(event) => setRoomNumber(event.target.value)}
        placeholder="Enter Room Number"
      />
      <button onClick={changeRoom}>Switch Room</button>
    </div>
  );
};

const RoomComponent = ({ number }) => {
  //get number
  const world  = useParams();
  
  


  return (
    <div>
      <h1>Room {world.number}</h1>
      <Link to="/">Back</Link>
    </div>
  );
}

const App = () => {
  const [roomNumber, setRoomNumber] = useState(1);
  const [roomgenerater, setRoomgenerater] = useState(1);
  const urlgenerator = () => {
    setRoomgenerater(roomNumber);
  };


  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Room />} />
        <Route path="/room/:number" element={<RoomComponent />} />
        {/* Give user a link to the room */}
      </Routes>
    </Router>
    <button onClick={urlgenerator}>Generate Room</button>
    <h1>Room {roomgenerater}</h1>


    </div>

  );


};

export default App;