import styled from 'styled-components';

import Editor from './components/Editor/Editor';
import ContentList from './components/ContentList/List';

import './App.css';

const Container = styled.div`
  padding: 0;
  margin: 0;
`

const Wrapper = styled.div`
  
`

const Header = styled.div`
  
`

const Body = styled.div`
  
`

const App = () => {
  return (
    <Container className="App">
      <Editor />
      <ContentList />
    </Container>
  );
};

export default App;
