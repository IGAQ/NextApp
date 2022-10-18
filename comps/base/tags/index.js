import { buttonGroupClasses } from "@mui/material";
import styled from "styled-components";

    const TagDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.bgcolor || "blue"};
    border-radius: 20px;
    padding: 5px 10px;
    margin: 5px;
    width: 5em;
    height: 2em;
    `;

export default function Tag ({
    text = "Tag",
}){

    return (
        <TagDiv>
            <h4>
                {text}
            </h4>
        </TagDiv>
    )
}