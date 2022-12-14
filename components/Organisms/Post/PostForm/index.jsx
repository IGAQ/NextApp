import {TextInput} from '../../../Atoms/Common/Inputs/TextInput';
import {Spacer} from '../../../Atoms/Common/Spacer';
import {MaxTextArea} from '../../../Molecules/Common/MaxTextArea';
import {Breakline} from '../../../Atoms/Common/Breakline';
import {RadioGroup} from '../../../Molecules/Common/RadioGroup';
import {ChipGroup} from '../../../Molecules/Common/ChipGroup';
import {MantineProvider} from '@mantine/core';
import {StyledSubmitButton} from '../../../Atoms/Common/Buttons/SubmitButton';
import {LabelledSwitch} from '../../../Molecules/Common/LabelledSwitch';
import {FlexBox} from '../../../../styles/globals';
import {useState} from 'react';
import {ModalAlert, moderationFailedProps, unknownErrorProps} from '../../Common/Modals/ModalAlert';
import {Button} from '../../../Atoms/Common/Buttons/Button';
import Link from 'next/link';

const queeryPinkColors = ['#ffe2e9', '#ffb2bf', '#ff758c', '#fe4e6a', '#C23950', '#e40b27', '#b2041f', '#800015', '#4e000c', '#1f0002'];
const storyPurpleColors = ['#eee4ff', '#c6b3ff', '#a880fd', '#924efc', '#821dfb', '#7906e2', '#6a03b0', '#54017e', '#38004d', '#17001d'];

export function PostForm({onSubmit, postTags, type}) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tone, setTone] = useState('casual');
    const [tag, setTag] = useState('');
    const [anonymous, setAnonymous] = useState(false);

    const [showSubmissionModal, setShowSubmissionModal] = useState(false);

    const [modalError, setModalError] = useState(false);

    const [createdPostId, setCreatedPostId] = useState(null);

    async function handleCheckSubmission(e) {
        e.preventDefault();
        let result = await onSubmit(title, content, tag, tone, anonymous);
        if (result.statusCode !== undefined) {
            if (result.statusCode === 500) {
                setModalError(() => {
                    return {...unknownErrorProps};
                });
            } else {
                setModalError(() => {
                    return {...moderationFailedProps};
                });
            }
        } else {
            setShowSubmissionModal(true);
            setCreatedPostId(result.postId);
        }
    }

    function closeContentCheckModal() {
        setModalError(() => false);
    }

    if (type === 'post') {
        return (
            <MantineProvider
                theme={{
                    fontFamily: 'Heebo, sans-serif',
                    colors: {
                        'queeryPink': queeryPinkColors,
                        'storyPurple': storyPurpleColors,
                    },
                }}>

                {(showSubmissionModal) && (
                    <ModalAlert
                        CustomButton={() => (
                            <Link href={'/homepage/' + createdPostId}>
                                <Button label="Take me to my post"></Button>
                            </Link>
                        )}

                        modalBoxPadding={'50px'}
                        title={'Congratulations!'}
                        titleColor={'#FF758C'}
                        titleTextWeight={'700'}

                        content={'Looks like you successfully posted a queery.'}
                        contentTextSize={'1.25rem'}

                        enableMoreText={false}

                        buttonText={'Take me to my post'}
                    />
                )}

                {(modalError) && <ModalAlert onClick={closeContentCheckModal} {...modalError}/>}
                <form onSubmit={(e) => handleCheckSubmission(e)}>
                    <FlexBox align="stretch">
                        <TextInput onChange={(e) => setTitle(e.target.value)} text={title} name="title"
                            label="Post title" id="title" placeholder="Enter your title"/>
                        <Spacer axis="vertical" size={25}/>
                        <MaxTextArea onChange={(e) => setContent(e.target.value)} name="content" id="content"
                            text={content} label="Queery" placeholder="Enter your Queery" maxLength="5000"/>
                        <Spacer axis="vertical" size={25}/>
                        <Breakline/>
                        <Spacer axis="vertical" size={25}/>
                        <FlexBox>
                            {/*<LabelledSwitch checked={anonymous} setChecked={() => setAnonymous(!anonymous)}*/}
                            {/*    label='Post anonymously'></LabelledSwitch>*/}
                            <Spacer axis="vertical" size={35}/>
                            <RadioGroup tone={tone} setTone={setTone}/>
                            <Spacer axis="vertical" size={35}/>
                            <ChipGroup onChange={setTag} postTags={postTags}/>
                        </FlexBox>
                        <Spacer axis="vertical" size={35}/>
                        <StyledSubmitButton text="Submit Queery"/>
                    </FlexBox>
                </form>

            </MantineProvider>

        );
    }

    if (type === 'story') {
        return (
            <MantineProvider
                theme={{
                    fontFamily: 'Heebo, sans-serif',
                    colors: {
                        'queeryPink': queeryPinkColors,
                        'storyPurple': storyPurpleColors,
                    },
                }}>

                {(showSubmissionModal) && (
                    <ModalAlert
                        CustomButton={() => (
                            <Link href={'/homepage/' + createdPostId}>
                                <Button label="Take me to my post"></Button>
                            </Link>
                        )}

                        modalBoxPadding={'50px'}
                        title={'Congratulations!'}
                        titleColor={'#FF758C'}
                        titleTextWeight={'700'}

                        content={'Looks like you successfully posted a story.'}
                        contentTextSize={'1.25rem'}

                        enableMoreText={false}

                        buttonText={'Take me to my post'}
                    />
                )}

                {(modalError) && <ModalAlert onClick={closeContentCheckModal} {...modalError}/>}
                <form onSubmit={(e) => handleCheckSubmission(e)}>
                    <FlexBox align="stretch">
                        <TextInput onChange={(e) => setTitle(e.target.value)} borderBottom="2px solid #C2ADff"
                            boxShadow="0 0 2px 2px #38004d" text={title} name="title" label="Story title"
                            id="title" placeholder="Enter your title"/>
                        <Spacer axis="vertical" size={25}/>
                        <MaxTextArea onChange={(e) => setContent(e.target.value)} borderBottom="2px solid #C2ADff"
                            boxShadow="0 0 2px 2px #38004d" name="content" rows="15" id="content"
                            text={content} label="Story" placeholder="Enter your Story" maxLength="5000"/>
                        <Spacer axis="vertical" size={25}/>
                        <Breakline/>
                        <Spacer axis="vertical" size={25}/>
                        <FlexBox>
                            <RadioGroup tone={tone} setTone={setTone}/>
                            <Spacer axis="vertical" size={35}/>
                            <ChipGroup onChange={setTag} postTags={postTags}/>
                            <Spacer axis="vertical" size={35}/>
                            {/*<LabelledSwitch checked={anonymous} setChecked={() => setAnonymous(!anonymous)}*/}
                            {/*    label='Post anonymously'></LabelledSwitch>*/}
                        </FlexBox>
                        <Spacer axis="vertical" size={35}/>
                        <StyledSubmitButton text="Submit Story"/>
                    </FlexBox>
                </form>

            </MantineProvider>

        );
    }
}
