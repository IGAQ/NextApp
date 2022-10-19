import styled from "styled-components";

    const TagDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.taggcolor || "#C2ADFF"};
    border-radius: 20px;
    padding: 5px 10px;
    margin: 5px;
    min-width: 3em;
    height: 1.5em;
    position: relative;
    bottom: 0;
    left: 0;
    `;

export default function Tag ({
    text = "Tag",
    tagcolor = "#C2ADFF",
}){

    return (
        <TagDiv bgcolor={tagcolor}>
            <div>
                {text}
            </div>
        </TagDiv>
    )
}