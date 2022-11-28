import { useContext, useState } from 'react';
import styled from 'styled-components';
import { PostContext, UserActionsHandlersContext, UserContext } from '../../../../lib/contexts';
import { FlexBox } from '../../../../styles/globals';
import { VerticalLine } from '../../../Atoms/Comment/VerticalLine';
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
  border-left: ${props => props.nestedLevel > 0 && "1px solid black"};
`;

const nestedLevelToPaddingLeft = {
    0: '24px',
    1: '48px',
    2: '48px',
    3: '96px',
};

const borderLeftForNestedComment = " 1px solid black";

const CommentBodyStyled = styled.div`
  padding-left: 24px;
`;

const StyledCard = styled.div`
  display: flex;
  text-align: left;
  padding: ${props => props.paddingTop ?? 0} 24px 0 ${props => props.isNewlyCreated ? '0' : nestedLevelToPaddingLeft[props.nestedLevel] ?? '24px'};
  background: #f5f5f5;
  max-width: ${props => props.maxWidth ?? '50em'};
  margin: 0 auto;
`;

export function CommentCard({isNewlyCreated = false, nestedLevel= 0, ...props}) {
    const comment = useContext(PostContext);
    const user = useContext(UserContext);
    const {handleCommentClick, handlePin, data} = useContext(UserActionsHandlersContext);

    const [createPrompt, setCommentPrompt] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    const togglePrompt = () => setCommentPrompt(!createPrompt);

    function handleSettings() {
        setShowSettings(true);
    }

    return (
        <StyledCard isNewlyCreated={isNewlyCreated} paddingTop={nestedLevel === 0 ? '24px' : 0} nestedLevel={nestedLevel}>
            {nestedLevel > 0 && new Array(nestedLevel).fill(0).map((item, i) => (
                <VerticalLine isLeft={i + 1 > 1 ? false : true} marginRight={i > 0 && "10px"} />
            ))}
            <FlexBox flex={1} align="stretch">
                <WrappedFlexBox dir="row" justify="space-between">
                    <PostHeader weight="400" username={comment.authorUser.username} date={comment.createdAt}/>
                    <FlexBox dir="row">
                        {comment.pinned && (
                            <>
                                <FlexBox> Author's </FlexBox>
                                <Spacer size={5}/>
                                <FlexBox> Choice </FlexBox> 
                            </>
                        )}
                        {(user && data.postAuthorId === user.userId || comment.pinned) && (
                            <CommentsPinIcon 
                                onClick={() => handlePin({commentId: comment.commentId, isPinning: !comment.pinned})} 
                                isActive={comment.pinned} 
                                isPostAuthor={user && data.postAuthorId === user.userId} />
                        )}
                        {showSettings ? <PostSettingsModal/> : <PostSetting onClick={() => handleSettings()}/>}
                    </FlexBox>
                </WrappedFlexBox>
                <CommentBodyStyled>
                    <Spacer size={25} borderLeft={borderLeftForNestedComment}/>
                    {comment.restrictedProps ? (
                        <Text 
                            padding='0 0 0 10px' 
                            borderLeft={borderLeftForNestedComment} 
                            size="14px" 
                            text={`[This comment is restricted due to ${comment.restrictedProps.reason}]`} 
                            weight="400" 
                            color="#000000" 
                            opacity="0.5" />
                    ) : (
                        <Text 
                            padding='0 0 0 10px' 
                            borderLeft={borderLeftForNestedComment} 
                            size={1} text={comment.commentContent} 
                            onClick={() => handleCommentClick({commentId: comment.commentId})}/>
                    )}
                    <Spacer size={25} borderLeft={borderLeftForNestedComment}/>
                    <FlexBox borderLeft={borderLeftForNestedComment}>
                        <UserActionsHandlersContext.Provider value={{handleTogglePrompt: togglePrompt}}>
                            <PostFooter onClick={togglePrompt}/>
                        </UserActionsHandlersContext.Provider>
                        <Spacer size={10}/>
                    </FlexBox>
                    {createPrompt && <CommentPrompt />}
                    <Spacer size={10} borderLeft={borderLeftForNestedComment} />
                </CommentBodyStyled>
            </FlexBox>
        </StyledCard>
    );
}
     
