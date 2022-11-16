import React from 'react';

import {OTDAnswerInp} from './index';

export default {
    title: 'Molecules/OfTheDay/AnswerInp',
    component: OTDAnswerInp,
    argTypes: {},
};

const Template = (args) => <OTDAnswerInp {...args} />;

export const Default = Template.bind({});
Default.args = {};
