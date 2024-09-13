import { useState } from "react";
import "./screen.css"; // Import the CSS file for styling

import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./database/firebace.config";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const list = [];
    const dbSnap = await getDocs(collection(db, "users"));
    dbSnap.forEach((item) => {
      list.push(item.data());
      setUsers(list);
    });
 
  };
  return (
    <div>
      <div className="userHeader">
        <h1>usersData</h1>
      </div>
      {users.map((item) => (
        <div key={item.uid} onClick={()=>navigate(`/chat`  ,{state : item})} className="users">
          <div className="userlist">
            <img
              src="https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Transparent-Image.png"
              height={45}
            />
            <div>
              <h1>{item.name}</h1>
              <p>{item.email}</p>
            </div>
          </div>
          <button>Message</button>
        </div>
      ))}
    </div>
  );
}
