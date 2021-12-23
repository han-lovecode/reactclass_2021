import { useState } from "react";

const EventPractice = () => {
  //   const [message, setMessage] = useState("");
  //   const [username, setUsername] = useState("");

  //   const handleChangeMessage = (e) => {
  //     setMessage(e.target.value);
  //   };
  //   const handleChangeUsername = (e) => {
  //     setUsername(e.target.value);
  //   };

  const [form, setForm] = useState({ username: "", message: "" });
  //초기 값 할당 안해주면 undefined가 들어가서 에러남
  const { username, message } = form;

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;

    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const handleClick = () => {
    alert(username + ":" + message);
    setForm({ username: "", message: "" });
  };

  const onKeyPress = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        onChange={handleChange}
        value={username}
      />

      <input
        type="text"
        name="message"
        placeholder="write anything"
        onChange={handleChange}
        value={message}
        onKeyPress={onKeyPress}
      />
      <button onClick={handleClick}>확인</button>
    </>
  );
};

export default EventPractice;
