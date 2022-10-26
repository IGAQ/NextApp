import styled from 'styled-components';

const SettingsIcons = styled.div`
    width: 1rem;
    height: 1rem;
    background-image: url(${props => props.icon || '/ReportIcon.svg'});
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0.5rem;
    `;

export function PostSettingsIcons({icon = '/ReportIcon.svg'}) {
    return (
        <SettingsIcons icon={icon} />
    );
}