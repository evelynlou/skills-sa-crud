import styled from "styled-components";

export default function StyledAllDone() {
  return (
    <StyledAllDoneDiv>
      <h1>Por hoje é só!</h1>
      <p>Fique a vontade para navegar por outras áreas da plataforma!</p>
    </StyledAllDoneDiv>
  );
}

const StyledAllDoneDiv = styled.div`
  border: 1px solid #003da5;
  border-radius: 30px;
  box-shadow: 0 5px 9px -5px black;
  margin-top: 100px;
  padding: 25px 50px;
`
