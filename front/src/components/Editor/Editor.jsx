import MonacoEditor from '@monaco-editor/react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
`;

const ButtonContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const RunCodeButton = styled(Button)`
  /* Agrega estilos personalizados aquí */
  && {
    display: flex;
    gap: 2px;
    font-size: 14px;
    color: white; /* Cambia el color del texto */
    font-weight: 400;
    width: 200px;
  }
  /* Agrega más estilos según tus necesidades */
`;

const Editor = () => {
  return (
    <Container>
      <Wrapper>
        <MonacoEditor
          height="400px"
          width="600px"
          defaultLanguage="javascript"
          defaultValue={`console.log('hello world')`}
          theme="vs-dark"
        />
        <ButtonContainer>
          <RunCodeButton variant="contained">SUBMIT</RunCodeButton>
          <RunCodeButton variant="contained">
            <PlayCircleOutlineIcon size="small"/>
            <p>RUN CODE</p>
          </RunCodeButton>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default Editor;
