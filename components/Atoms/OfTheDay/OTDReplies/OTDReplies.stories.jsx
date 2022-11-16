import React from 'react';

import {OTDReplies} from './index';

export default {
    title: 'Atoms/OfTheDay/OTDReplies',
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
