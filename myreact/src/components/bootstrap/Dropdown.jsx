import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Dropdown = () => {
  const [isShow, setIsShow] = useState(false);
  const btnEl = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (!btnEl.current?.contains(e.target)) {
        setIsShow(false);
      }
    };
    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  const handleClick = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <Wrapper>
      <Btn ref={btnEl} onClick={handleClick}>
        Dropdown Button
      </Btn>
      {isShow && (
        <>
          <Backdrop onClick={handleClick} />
          <Menu>
            <Item>Action</Item>
            <Item>Another Action</Item>
            <Item>Something else</Item>
          </Menu>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;
const Btn = styled.button`
  padding: 6px 12px;
  background: #198754;
  border: none;
  color: white;
`;
const Menu = styled.ul`
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  position: absolute;
  z-index: 101;
`;
const Item = styled.li`
  padding: 5px 15px;
  cursor: poiner;
  & + & {
    border-top: 1px solid #ddd;
  }
  :hover {
    background: #ddd;
  }
`;
const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
`;

export default Dropdown;
