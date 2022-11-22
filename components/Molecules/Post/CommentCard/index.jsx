import {useState} from 'react';
import styled from 'styled-components';
import {FlexBox} from '../../../../styles/globals';
import timeAgo from '../../../../utils/timeAgo';
import {Spacer} from '../../../Atoms/Common/Spacer';
import {Text} from '../../../Atoms/Common/Text';
import {PostSetting} from '../../../Atoms/Post/PostSetting';
import {PostFooter} from '../../../Organisms/Post/PostFooter';
import {PostHeader} from '../../../Organisms/Post/PostHeader';
import {PostSettingsModal} from '../../../Organisms/Post/PostSettingsModal';
import {CommentPrompt} from '../CommentPrompt';


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

export function CommentCard({comment, nestedLevel= 0, onClick, ...props}) {
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
                    {showSettings ? <PostSettingsModal/> : <PostSetting onClick={() => handleSettings()}/>}
                </WrappedFlexBox>
                <Spacer size={25}/>
                <Text size={1} text={comment.commentContent} onClick={onClick}/>
                <Spacer size={25}/>
                <FlexBox>
                    <PostFooter score={comment.totalVotes} numComments={comment.childComments?.length ?? 0} onClick={togglePrompt}/>
                    <Spacer size={10}/>
                </FlexBox>
                {createPrompt && <CommentPrompt
                    username={comment.authorUser?.username ?? 'Anonymous'}
                    parentComment={comment.commentId}
                />}
                <Spacer size={10}/>
            </FlexBox>
        </StyledCard>
    );
}
     
