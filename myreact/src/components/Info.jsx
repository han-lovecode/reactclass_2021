import { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  return (
    <>
      <div>
        <input placeholder="name" onChange={handleChangeName} />
        <input placeholder="nickname" onChange={handleChangeNickName} />
      </div>
      <h2>이름 : {name}</h2>
      <h2>닉네임 : {nickName}</h2>
    </>
  );
};

export default Info;
