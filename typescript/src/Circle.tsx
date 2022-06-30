import styled from 'styled-components';

interface CircleProps {
  bgColor: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: ${(props) => props.bgColor};
`;

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
