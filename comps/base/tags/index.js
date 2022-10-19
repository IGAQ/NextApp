import styled from "styled-components";

    const TagDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.bgcolor || "blue"};
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
    bgcolor = "blue",
}){

    return (
        <TagDiv bgcolor={bgcolor}>
            <div>
                {text}
            </div>
        </TagDiv>
    )
}