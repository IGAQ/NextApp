import { PostSettingsButton } from '../../Molecules/PostSettingsButton';
import styled from 'styled-components';
import { ReportModal } from '../ReportModal';
import { useState } from 'react';

const SettingsModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    width: 6em;
    height: 3em;
    `;

export function PostSettingsModal(props) {
    const [reportOpen, setReportOpen] = useState(false);

    return (
        <>
            {reportOpen && <ReportModal onClose={() => setReportOpen(false)} />}
            <SettingsModalDiv>
                <PostSettingsButton onOpen = {()=> setReportOpen(true)} />
                <PostSettingsButton setType="Save" icon="SaveIcon.svg" on />
            </SettingsModalDiv>
        </>
    );
}