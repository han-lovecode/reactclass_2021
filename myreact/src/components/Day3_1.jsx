import { useState } from "react";

const Day31 = () => {
  const [form, setForm] = useState({ username: "", message: "" });

  const { username, message } = form;

  const handlechange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const handleClick = () => {
    alert(username + ":" + message);
    setForm({ username: "", message: "" });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      <h1>이벤트연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        onChange={handlechange}
        value={username}
      />

      <input
        type="text"
        name="message"
        placeholder="write something to enjoy"
        onChange={handlechange}
        value={message}
        onKeyPress={onKeyPress}
      />
      <button onClick={handleClick}>확인</button>
    </>
  );
};

export default Day31;
