import styled, { keyframes } from 'styled-components';

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Btn = styled.button`
  color: tomato;
`;

function App() {
  return (
    <Wrapper>
      <Btn>Log in</Btn>
      <Btn as="a">Go home</Btn>
    </Wrapper>
  );
}

export default App;
