import React from 'react';

import {ModalAlert} from './index';

export default {
    title: 'Organisms/Common/Modals/ModalAlert',
    component: ModalAlert,
    argTypes: {},
};

const Template = (args) => <ModalAlert {...args} />;

export const Default = Template.bind({});
Default.args = {
    modalBoxPadding: '25px 50px 50px 50px',

    title: 'Alert!',
    titleColor: '#FF758C',
    titleTextWeight: 700,

    content: 'The content of the alert. This is a test.',
    contentColor: '',
    contentTextSize: '1.25rem',

    enableMoreText: true,
    moreText: 'Please do some actions',
    moreTextSize: '1rem',

    buttonText: 'Okay!',
};

export const Report = Template.bind({});
Report.args = {
    modalBoxPadding: '25px 50px 50px 50px',

    title: '',
    titleColor: '#FF758C',
    titleTextWeight: 700,

    content: 'Thank you! You\'ve reported this post.',
    contentColor: '#FF758C',
    contentTextWeight: 600,
    contentTextSize: '1.25rem',

    enableMoreText: true,
    moreText: 'Our moderators will review this post. ',
    moreTextSize: '1rem',

    buttonText: 'Okay!',
};

export const Submission = Template.bind({});
Submission.args = {
    modalBoxPadding: '50px',

    title: 'Congratulations!',
    titleColor: '#FF758C',
    titleTextWeight: 700,

    content: 'Looks like you successfully posted a queery.',
    contentTextSize: '1.25rem',

    enableMoreText: false,

    buttonText: 'Take me to my post',
};

