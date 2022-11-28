import { useContext, useState } from 'react';
import styled from 'styled-components';
import { PostContext, UserActionsHandlersContext } from '../../../../lib/contexts';
import { FlexBox } from '../../../../styles/globals';
import { Spacer } from '../../../Atoms/Common/Spacer';
import { Text } from '../../../Atoms/Common/Text';
import { CommentsPinIcon } from '../../../Atoms/Post/CommentsPinIcon';
import { PostSetting } from '../../../Atoms/Post/PostSetting';
import { PostFooter } from '../../../Organisms/Post/PostFooter';
import { PostHeader } from '../../../Organisms/Post/PostHeader';
import { PostSettingsModal } from '../../../Organisms/Post/PostSettingsModal';
import { CommentPrompt } from '../CommentPrompt';


const WrappedFlexBox = styled(FlexBox)`
  flex-wrap: wrap;
`;

const nestedLevelToPaddingLeft = {
    0: '24px',
    1: '48px',
    2: '72px',
    3: '96px',
};

const StyledCard = styled.div`
  text-align: left;
  padding: ${props => props.paddingTop ?? 0} 24px 0 ${props => nestedLevelToPaddingLeft[props.nestedLevel] ?? '24px'};
  background: #f5f5f5;
  border-radius: 8px;
`;

export function CommentCard({nestedLevel= 0, ...props}) {
    const comment = useContext(PostContext);
    const {handleCommentClick} = useContext(UserActionsHandlersContext);

    const [createPrompt, setCommentPrompt] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    const togglePrompt = () => setCommentPrompt(!createPrompt);

    function handleSettings() {
        setShowSettings(true);
    }

    return (
        <StyledCard paddingTop={nestedLevel === 0 ? '24px' : 0} nestedLevel={nestedLevel}>
            <FlexBox align="stretch">
                <WrappedFlexBox dir="row" justify="space-between">
                    <PostHeader weight="400" username={comment.authorUser.username} date={comment.createdAt}/>
                    <FlexBox dir="row">
                        <CommentsPinIcon/>
                        {showSettings ? <PostSettingsModal/> : <PostSetting onClick={() => handleSettings()}/>}
                    </FlexBox>
                </WrappedFlexBox>
                <Spacer size={25}/>
                {comment.restrictedProps ? (
                    <Text size="14px" text={`[This comment is restricted due to ${comment.restrictedProps.reason}]`} weight="400" color="#000000" opacity="0.5" />
                ) : (
                    <Text size={1} text={comment.commentContent} onClick={() => handleCommentClick({commentId: comment.commentId})}/>
                )}
                <Spacer size={25}/>
                <FlexBox>
                    <UserActionsHandlersContext.Provider value={{handleTogglePrompt: togglePrompt}}>
                        <PostFooter onClick={togglePrompt}/>
                    </UserActionsHandlersContext.Provider>
                    <Spacer size={10}/>
                </FlexBox>
                {createPrompt && <CommentPrompt />}
                <Spacer size={10}/>
            </FlexBox>
        </StyledCard>
    );
}
     
