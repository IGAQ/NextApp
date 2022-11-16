import React from 'react';

import {SplashImg} from './index';

export default {
    title: 'Atoms/SplashImg',
    component: SplashImg,
    argTypes: {
        img: {control: 'text'},
    },
};

const Template = (args) => <SplashImg {...args} />;

export const Default = Template.bind({});
Default.args = {
    img: '',
};
