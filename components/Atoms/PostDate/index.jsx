import moment from 'moment';
import styled from 'styled-components';

const PostDateDiv = styled.div`
    font-size: 1rem;
    font-weight: 400;
    color: #000;
    `;

    

export function PostDate ({date = '1666321046'}) {
    const dateObj = new Date(date*1000).toLocaleDateString('en-US', {year: 'numeric', month: 'numeric', day: 'numeric'});
    const dt = moment(dateObj, 'MM/DD/YYYY').fromNow(); 
    return (
        <PostDateDiv>
            {dt}
        </PostDateDiv>
    );
}