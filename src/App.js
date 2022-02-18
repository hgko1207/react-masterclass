import styled from 'styled-components';

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ require: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
