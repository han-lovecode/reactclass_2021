import { useState } from "react";

const IterationSample = () => {
  //const names = ["눈사람", "얼음", "눈", "바람"];
  const [value, setValue] = useState("");
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [nextId, setNextId] = useState(5);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    //alert(value);
    if (value.length === 0) return alert("값을 입력하세요");

    setNames([...names, { id: nextId, text: value }]);
    setValue("");
    setNextId(nextId + 1);
  };

  const handleDelete = (aaa) => {
    //handleDelete는 name.id의 값을 첫번째 인자로 받아온다 : 데이터 타입은 숫자
    console.log(aaa);
    // 삭제가능
    // parameter로 받아온 id와 names 배열에서 id 가 같은 element를 찾는다
    // 그 element만 제거된 새로운 배열을 만듬
    // 새로운 배열을 setNames 함수를 이용해서  names를 변경시킨다

    // 받아온 id와 element의 id가 다른 element만 뽑아서 새로운 배열을 만든다
    const newNames = names.filter((name) => name.id !== aaa);
    setNames(newNames);
    console.log(newNames);
  };
  return (
    <>
      <input onChange={handleChange} value={value} />
      <button onClick={handleClick}>추가</button>
      <ul>
        {names.map((name, index) => {
          return (
            <li key={name.id} onDoubleClick={() => handleDelete(name.id)}>
              {name.text}
            </li>
          );
          //item이 변수라서 중괄호로 묶음
          //unique 한값이 없으면 index를 쓰기도함 (최후의 수단, 권장xxx)
        })}
      </ul>
    </>
  );
};

export default IterationSample;
