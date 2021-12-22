const Day2 = ({ name, age }) => {
  //const {name, age} = props;
  //   const name = props.name;
  //   const age = props.age;
  const friend = "harry";
  const num = 123;

  return (
    <>
      <h1>Hello React</h1>
      <h1>my name is {name}</h1>
      <h1>I am {age}</h1>
      {friend === "harry" ? (
        <h1>내 친구 harry야</h1>
      ) : (
        <h1>나는 친구가 엄나봐ㅜㅜ</h1>
      )}
      {num || "값이 falsy 합니다"}
    </>
  );
};

export default Day2;
