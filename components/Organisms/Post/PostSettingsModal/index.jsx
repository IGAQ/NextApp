import {PostSettingsButton} from '../../../Molecules/Post/PostSettingsButton';
import styled from 'styled-components';
import {useState} from 'react';
import {ModalAlert} from '../../Common/Modals/ModalAlert';

const SettingsModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  width: 6em;
  height: 3em;
`;

export function PostSettingsModal() {
    const [reportOpen, setReportOpen] = useState(false);

    return (
        <>
            {reportOpen && (
                <ModalAlert
                    onClick={() => setReportOpen(false)}

                    title={''}

                    content={'Thank you! You\'ve reported this post.'}
                    contentColor={'#FF758C'}
                    contentTextWeight={600}
                    contentTextSize={'1.25rem'}

                    enableMoreText={true}
                    moreText={'Our moderators will review this post.'}
                    moreTextSize={'1rem'}

                    buttonText={'Okay!'}
                />
            )}
            <SettingsModalDiv>
                <PostSettingsButton onOpen={() => setReportOpen(true)}/>
                <PostSettingsButton setType="Save" icon="SaveIcon.svg" on/>
            </SettingsModalDiv>
        </>
    );
}