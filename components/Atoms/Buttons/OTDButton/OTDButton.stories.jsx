import React from 'react';

import { OTDButton } from './index';

export default {
    title: 'Atoms/Buttons/OTDButton',
    component: OTDButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <OTDButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Answer',
};

export const Story = Template.bind({});
Story.args = {
    text: 'Story',
};
