import {PostSettingsButton} from '../../../Molecules/Post/PostSettingsButton';
import styled from 'styled-components';
import {useContext, useState} from 'react';
import {ModalAlert, ReportModal} from '../../Common/Modals/ModalAlert';
import {iconsPaths} from '../../../../lib/constants/iconsPaths';
import { ReportGmailerrorred } from '@mui/icons-material';
import {InPageLoader} from '../../../Atoms/Common/Loader';
import {PostContext, UserActionsHandlersContext} from '../../../../lib/contexts';

const SettingsModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  width: 6em;
  height: 3em;
`;

export function PostSettingsModal() {
    const { handleSubmitReport } = useContext(UserActionsHandlersContext);
    const { isPost, postId } = useContext(PostContext);

    const [reportOpen, setReportOpen] = useState(false);
    const [reportText, setReportText] = useState('');

    const [reportSubmitButton,setReportSubmitButton] = useState('Send!');

    const handleReportText = async () => {
        setReportSubmitButton(<InPageLoader size={'xs'}/>);
        //send info to backend

        console.log(handleSubmitReport);
        try {
            const result = await handleSubmitReport({isPost, id: postId, reason: reportText});

            console.log('reported result', result);

            setReportSubmitButton('Sent ✅');
        } catch (error) {
            console.log(error);
        }
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
                    textInputState={reportText}
                    setTextInputState={setReportText}

                    buttonText={reportSubmitButton}
                />
            )}
            <SettingsModalDiv>
                <PostSettingsButton onOpen={() => setReportOpen(true)}/>
                <PostSettingsButton setType="Save" icon={iconsPaths.saveIcon} on/>
            </SettingsModalDiv>
        </>
    );
}