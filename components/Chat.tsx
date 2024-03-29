import { Avatar } from '@material-ui/core';
import styled from 'styled-components';

const Chat = ({id, user}) => {
  return (
    <Container>
      <UserAvatar />
      <p>Recipient Email</p>
    </Container>
  )
}

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  word-break: break-word;

  :hover {
    background-color: #e9eaeb;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`