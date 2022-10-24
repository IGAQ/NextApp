import styled from 'styled-components';

const PostDateDiv = styled.div`
    font-size: 1rem;
    font-weight: 400;
    color: #000;
    `;

    

export function PostDate ({date = '1666321046'}) {

    const dt = new Date(date * 1000).toLocaleString();
    return (
        <PostDateDiv>
            {dt}
        </PostDateDiv>
    );
}