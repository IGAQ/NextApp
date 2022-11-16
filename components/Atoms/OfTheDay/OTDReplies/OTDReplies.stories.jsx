import React from 'react';

import {OTDReplies} from './index';

export default {
    title: 'Atoms/OfTheDay/Replies',
    component: OTDReplies,
    argTypes: {
        replies: {control: 'number'},
    },
};

const Template = (args) => <OTDReplies {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    replies: 0,
};
