import React from 'react';

import {OTDInput} from './index';

export default {
    title: 'Atoms/OfTheDay/Input',
    component: OTDInput,
    argTypes: {
        prompt: {control: 'text'},
    },
};

const Template = (args) => <OTDInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    prompt: 'Do you have a same-gender crush? Who?',
};

export const Story = Template.bind({});
Story.args = {
    prompt: 'I kissed a girl and I liked it, the taste of her cherry chapstick..',
};
