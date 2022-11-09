import React from 'react';

import { UserTextInput } from './index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Atoms/UserTextInput',
    component: UserTextInput,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <UserTextInput {...args} />;

export const Username = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Username.args = {
    type: 'text',
    placeholder: 'Username',
    label: 'Username',
};

export const Email = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Email.args = {
    type: 'text',
    placeholder: 'email@address.com',
    label: 'Email Address',
};

export const Password = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Password.args = {
    type: 'password',
    placeholder: 'Password',
    label: 'Password',
};

