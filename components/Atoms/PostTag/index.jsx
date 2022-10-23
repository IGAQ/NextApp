import styled from 'styled-components';

const TagDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.tagBgColor || '#C2ADFF'};
    border-radius: 20px;
    padding: 5px 20px;
    line-height: 100px;
    text-align: center;
    margin: 5px;
    margin-left: 0;
    max-width: 5em;
    font-size: 1em;
    height: 1.5em;
    position: relative;
    bottom: 0;
    left: 0;
    color: ${props => props.tagColor};
    `;

export function PostTag ({
    text = 'Tag',
    tagBgColor = '#C2ADFF',
    tagColor = 'white',
}){

    return (
        <TagDiv tagBgColor={tagBgColor} tagColor={tagColor}>
            <div>
                {text}
            </div>
        </TagDiv>
    );
}