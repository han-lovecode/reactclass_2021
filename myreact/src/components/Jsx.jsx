const Jsx = (props) => {
  const name = "han";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };

  return (
    <>
      <div style={style}>{name}</div>
      <h1 style={{ color: "teal", fontSize: 50 }}>난 {props.age}살 입니다</h1>
      {name === "han" ? <h1>한 입니다</h1> : <h1>한이 아닙니다</h1>}

      <h1 className="han">{name} 안녕?</h1>
      <h2>잘 작동하니?</h2>

      {name === "han" && <h1>한 입니다.123</h1>}
      {/* 앞에가 참이 아니면 뒤는 출력되지 않는다 */}
      {name || "값이 falsy 합니다"}
      {/* name이 falsy한 값이 아니면 출력된다 */}
      {/* falsy : 0, null, undeifined, NaN, false,""=> if문을 통과하지 못하는 것들 */}
      <h1>{props.children}</h1>
    </>
  );
};

export default Jsx;
