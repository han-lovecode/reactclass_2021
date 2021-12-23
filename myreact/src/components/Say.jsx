import { useState } from "react";

const Say = () => {
  const [message, setMaessage] = useState("");
  const onClickEnter = () => setMaessage("안녕하세요");
  const onClickLeave = () => setMaessage("안녕히 가세요");

  //const [color, setColor] = useState("black");
  const [style, setStyle] = useState({
    color: "black",
    fontSize: 20,
  });
  //useState에 객체 자체를 넣을 수도 있다. 스프레드를 이용해서 일부만 변경하고 나머지는 그대로 킵 할 수도 있음

  return (
    <>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={style}>{message}</h1>
      <h1 style={style}>하잇!</h1>

      <button
        style={{ color: "red" }}
        onClick={() => setStyle({ ...style, color: "red" })}
      >
        빨간색
      </button>
      <button
        style={{ color: "green" }}
        onClick={() => setStyle({ ...style, color: "green" })}
      >
        초록색
      </button>
      <button
        style={{ color: "blue" }}
        onClick={() => setStyle({ ...style, color: "blue" })}
      >
        파란색
      </button>
    </>
  );
};

export default Say;
