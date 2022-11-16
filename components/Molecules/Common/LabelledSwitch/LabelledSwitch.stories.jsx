import React from 'react';

import {LabelledSwitch} from './index';

export default {
    title: 'Molecules/Common/LabelledSwitch',
    component: LabelledSwitch,
    argTypes: {},
};

const Template = (args) => <LabelledSwitch {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
