import { useState } from "react";

const Counter2 = () => {
  const [num, setNum] = useState(0);
  const handleChange = (n) => {
    setNum(num + n);
  };

  return (
    <>
      <h2>현재 카운터 값은 {num} 입니다.</h2>
      <button onClick={() => handleChange(1)}>+1</button>
      <button onClick={() => handleChange(-1)}>-1</button>
      <button onClick={() => handleChange(-100)}>-100</button>
      <button onClick={() => handleChange(1000)}>1000</button>
      <button onClick={() => handleChange(0)}>0</button>
      <button onClick={() => handleChange(5)}>5</button>
    </>
  );
};

export default Counter2;
