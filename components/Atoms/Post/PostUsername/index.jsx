import styled from 'styled-components';

const UserName = styled.div`
  font-size: ${props => props.size || '1.5rem'};
  font-weight: ${props => props.weight || '700'};
  color: #000;
`;

export function PostUsername({username = 'Username', props}) {
    return (
        <UserName>
            {username}
        </UserName>
    );
}