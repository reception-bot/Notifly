import * as React from "react";
import styled from "styled-components";

const FinishPage: React.FunctionComponent<{}> = (props: any) => {
  // need to implement a more react-type solution
  // window.setTimeout(() => {
  //   window.location.href = "http://localhost:3000";
  // }, 5000);
  return (
    <FinishStyled>
      <img src='/src/images/codesmith.svg' style={{height:'30vh', width:'30vw'}} alt='Logo' />
      <FirstStyled>Welcome, </FirstStyled>
      <SecondStyled>Have a seat, Someone will be with you shortly</SecondStyled>
    </FinishStyled>
  );
};

const FinishStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  height: 100vh
  justify-content: center;
  
`;

const FirstStyled = styled.div`
  font-size: 10rem;
  font-weight: bold;
  color: rgb(54, 74, 143);
  border: 2px solid green;
  margin: 1rem;
`;

const SecondStyled = styled.div`
  font-size: 10em;
  width: 60vw;
  color: rgb(54, 74, 143);
  border: 2px solid blue;
  margin: 1rem;
`;

export default FinishPage;
