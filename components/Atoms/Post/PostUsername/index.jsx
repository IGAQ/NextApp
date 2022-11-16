import styled from 'styled-components';

const UserName = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
`;

export function PostUsername({username = 'Username'}) {
    return (
        <UserName>
            {username}
        </UserName>
    );
}