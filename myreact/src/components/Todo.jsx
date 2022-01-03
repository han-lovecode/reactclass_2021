import { useRef, useState } from "react";
import styled from "styled-components";

const Todo = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const nextId = useRef(1);

  const handleAddTodo = () => {
    //if (text === "") return;
    const newList = [
      ...todoList,
      { id: nextId.current, text: text, isDone: false },
    ];
    setTodoList(newList);
    setText("");
    nextId.current++;
  };
  const handleDelete = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo();
  };
  const handleIsDone = (e, id) => {
    //const isDone = e.target.checked;
    const newTodolist = todoList.map((todo) => {
      if (todo.id === id) {
        todo.isDone = e.target.checked;
      }
      return todo;

      //return todo.id === id ? {...todo, isDone} :todo;
    });
    setTodoList(newTodolist);
  };

  return (
    <Container>
      <Title>일정관리</Title>
      <InputWrapper>
        <form onSubmit={handleSubmit}>
          <InputText
            required
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <BtnSubmit>추가</BtnSubmit>
        </form>
      </InputWrapper>
      <List>
        {todoList.map(({ id, text, isDone }) => (
          <Item key={id}>
            <label>
              <Checkbox
                type="checkbox"
                checked={isDone}
                onChange={(e) => handleIsDone(e, id)}
              />
              <Content isDone={isDone}>{text}</Content>
            </label>
            <BtnDelete onClick={() => handleDelete(id)}>삭제</BtnDelete>
          </Item>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  margin: 10px auto;
  border: 1px solid black;
`;
const Title = styled.div`
  background: black;
  color: white;
  text-align: center;
  font-weight: bold;
  padding: 10px 0;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid black;
`;
const InputText = styled.input`
  flex: 1;
  margin-right: 10px;
`;
const BtnSubmit = styled.button``;
const List = styled.ul``;
const Item = styled.li`
  display: flex;
  padding: 10px;
  label {
    flex: 1;
    display: flex;
    align-items: center;
  }
  & + & {
    border-top: 1px solid #efefef;
  }
`;
const Checkbox = styled.input``;
const Content = styled.div`
  color: ${({ isDone }) => isDone && "#ddd"};
  text-decoration: ${({ isDone }) => isDone && "line-through"};
`;
const BtnDelete = styled.button``;

export default Todo;
