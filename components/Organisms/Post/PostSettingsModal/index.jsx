import {PostSettingsButton} from '../../../Molecules/Post/PostSettingsButton';
import styled from 'styled-components';
import {useContext, useState} from 'react';
import {ReportModal} from '../../Common/Modals/ModalAlert';
import {iconsPaths} from '../../../../lib/constants/iconsPaths';
import {InPageLoader} from '../../../Atoms/Common/Loader';
import {UserActionsHandlersContext} from '../../../../lib/contexts';

const SettingsModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  width: 6em;
  height: 3em;
`;

export function PostSettingsModal() {
    const { handleSubmitReport, data } = useContext(UserActionsHandlersContext);

    const [reportOpen, setReportOpen] = useState(false);
    const [reportText, setReportText] = useState('');

    const [reportSubmitButton,setReportSubmitButton] = useState('Send!');

    const handleReportText = async () => {
        setReportSubmitButton(<InPageLoader size={'xs'}/>);

        try {
            await handleSubmitReport({isPost: data.isPost, id: data.postId, reason: reportText});

            setReportSubmitButton('Sent ✅');

            setTimeout(() => {
                setReportOpen(false);
            }, 2000);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {reportOpen && (
                <ReportModal
                    onSubmit={() => handleReportText()}
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
                <PostSettingsButton icon = {iconsPaths.reportIcon} onOpen={() => setReportOpen(true)}/>
                <PostSettingsButton setType="Save" icon={iconsPaths.saveIcon} on/>
            </SettingsModalDiv>
        </>
    );
}