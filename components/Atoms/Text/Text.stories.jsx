import React from 'react';

import {Text} from './index';

export default {
    title: 'Atoms/Text',
    component: Text,
    argTypes: {},
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: '2rem',
    color: 'black',
    weight: '400',
    text: 'Heading',
    textAlign: 'left',
    display: 'block',
    margion: '0',
    lineHeight: 'inherit',
    overflow: 'visible',
    paddling: '0',
};
