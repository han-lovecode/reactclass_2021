import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    case "RESET":
      return { value: 0 };
    default:
      return state;
  }
};

const Counter3 = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <>
      <p>
        현재 카운터 값은 <b>{state.value}입니다</b>
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}> +1 </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}> -1 </button>
      <button onClick={() => dispatch({ type: "RESET" })}> 0 </button>
    </>
  );
};

export default Counter3;
