import React from 'react';

import {PostSettingsIcons} from './index';
import IconStories from '../../Icons/Icon/Icon.stories';

const argTypes = Object.keys(IconStories.argTypes).reduce((acc, key) => {
    if (key !== 'icon') {
        acc[key] = IconStories.argTypes[key];
    }
    return acc;
}, {});

export default {
    title: 'Atoms/Post/SettingsIcons',
    component: PostSettingsIcons,
    argTypes,
};

const Template = (args) => <PostSettingsIcons {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 1,
    cssTransform: '',
};

