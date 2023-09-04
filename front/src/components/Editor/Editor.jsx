import MonacoEditor from '@monaco-editor/react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
// import { useRef, useState } from 'react';

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  flex: 1;
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

const Description = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 32px;
  text-align: center;
  text-decoration: none;
`;

const Content = styled.div`
  
  font-size: 16px;
  padding: 40px;
`

const Editor = () => {
  // const [value, setValue] = useState(null);
  // const editor = useRef();

  // const handleRunCode = (e) => {};

  return (
    <Container>
      <Wrapper>
        <Description>
          <Title>DESCRIPTION</Title> {/* excercise.description.title */}
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta corporis tempora fugiat
            expedita doloremque veritatis facilis nulla inventore dolores fuga molestias eos quae
            libero minus pariatur error cupiditate, molestiae totam!
          </Content>{' '}
          {/* excercise.description.content */}
        </Description>
      </Wrapper>
      <Wrapper>
        <MonacoEditor
          height="400px"
          width="100%"
          defaultLanguage="javascript"
          defaultValue={`console.log('hello world')`}
          theme="vs-dark"
        />
        <ButtonContainer>
          <RunCodeButton variant="contained">SUBMIT</RunCodeButton>
          <RunCodeButton variant="contained">
            <PlayCircleOutlineIcon size="small" />
            <p>RUN CODE</p>
          </RunCodeButton>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default Editor;
