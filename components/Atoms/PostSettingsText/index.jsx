import styled from 'styled-components';

const SettingsButtonDiv = styled.div`
    font-size: 1rem;
    font-weight: 400;
    color: #000;
    `;


export function PostSettingsText ({setType = 'Report'}) {
    return (
        <SettingsButtonDiv>
            {setType}
        </SettingsButtonDiv>
    );
}