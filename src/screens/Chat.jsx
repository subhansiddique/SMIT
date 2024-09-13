import { useLocation, useNavigate } from "react-router-dom";
import "./screen.css"; // Import the CSS file for styling

import { useEffect, useState } from "react";

function Chat() {
  const [message, setMessage] = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log("🚀 ~ Chat ~ state:", state);

  useEffect(() => {
    getMessage();
  }, []);

  const getMessage = async () => {};

  return (
    <div className="main">
      <div className="userHeader" >
        <img src="https://icon-library.com/images/white-back-icon/white-back-icon-29.jpg" onClick={()=>navigate(`/home`)} height={30} width={30}/>
        <img
          src="https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Transparent-Image.png"
          height={45}
        />
        <h1> {state.name}</h1>
      </div>
    </div>
  );
}
export default Chat;
