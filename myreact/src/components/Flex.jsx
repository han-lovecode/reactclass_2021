import styled from "styled-components";

const Flex = () => {
  return (
    <Container>
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
    </Container>
  );
};

const GridContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  border: solid black;
  flex-wrap: wrap;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  border: solid black;
  flex-wrap: wrap;
`;
const Box = styled.div`
  width: 200px;
  height: 200px;
  background: aqua;
`;
const Box1 = styled(Box)`
  background: blue;
  width: 100px;
  height: 400px;
  flex-grow: 1;
`;
const Box2 = styled(Box)`
  background: red;
  width: 400px;
  height: 200px;
`;
const Box3 = styled(Box)`
  background: green;
  width: 100px;
  height: 100px;
  flex-grow: 1;
`;
const Box4 = styled(Box)`
  background: gold;
  width: 300px;
  flex-grow: 1;
`;

export default Flex;
