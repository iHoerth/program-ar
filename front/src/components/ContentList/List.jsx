import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  margin: 0;
  padding: 0;
`;

const ContentList = () => {
  return (
    <Container>
      <List></List>
    </Container>
  );
};

export default ContentList;
