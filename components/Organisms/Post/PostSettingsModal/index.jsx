import {PostSettingsButton} from '../../../Molecules/Post/PostSettingsButton';
import styled from 'styled-components';
import {useState} from 'react';
import {ModalAlert, ReportModal} from '../../Common/Modals/ModalAlert';
import {iconsPaths} from '../../../../lib/constants/iconsPaths';
import { ReportGmailerrorred } from '@mui/icons-material';

const SettingsModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  width: 6em;
  height: 3em;
`;

export function PostSettingsModal() {
    const [reportOpen, setReportOpen] = useState(false);
    const [reportText, setReportText] = useState('');

    const handleReportText = () => {
        //send info to backend
        setReportOpen(false);
    };

    return (
        <>
            {reportOpen && (
                <ReportModal
                    onClick={() => handleReportText()}
                    cancelClick = {() => setReportOpen(false)}
                    title={''}

                    content={'Please let us know why you are reporting this post.'}
                    contentColor={'#FF758C'}
                    contentTextWeight={600}
                    contentTextSize={'1.25rem'}

                    enableMoreText={false}
                    moreText={'Our moderators will review this post.'}
                    moreTextSize={'1rem'}
                    enableTextIput={true}
                    buttonText={'Send!'}
                />
            )}
            <SettingsModalDiv>
                <PostSettingsButton onOpen={() => setReportOpen(true)}/>
                <PostSettingsButton setType="Save" icon={iconsPaths.saveIcon} on/>
            </SettingsModalDiv>
        </>
    );
}