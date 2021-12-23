import { useState } from "react";

const Day3 = () => {
  const [message, setMessage] = useState("");
  const eventEnter = () => setMessage("환영합니다 :D");
  const eventLeave = () => setMessage("다음에 또 봐영^^");

  const [style, setStyle] = useState({
    color: "black",
    fontSize: 20,
  });

  return (
    <>
      <button onClick={eventEnter}>입장</button>
      <button onClick={eventLeave}>퇴장</button>
      <h1 style={style}>{message}</h1>

      <button
        style={{ color: "red" }}
        onClick={() => {
          setStyle({ ...style, color: "red" });
        }}
      >
        Red
      </button>
      <button
        style={{ color: "gold" }}
        onClick={() => {
          setStyle({ ...style, color: "gold" });
        }}
      >
        Gold
      </button>
      <button
        style={{ color: "skyblue" }}
        onClick={() => {
          setStyle({ ...style, color: "skyblue" });
        }}
      >
        skyblue
      </button>
    </>
  );
};

export default Day3;
