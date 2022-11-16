import React from 'react';

import {PostTagBox} from './index';

export default {
    title: 'Molecules/Post/TagBox',
    component: PostTagBox,
    argTypes: {},
};

const Template = (args) => <PostTagBox {...args} />;

export const Default = Template.bind({});
// Default.args = {
//     posts: [
//         { postId: 1,
//             postTitle: 'Test',
//             postContent: 'Test',
//             createdAt: '136246246',
//             postTags: [{tagName:'serious'}, {tagName:'advice'}],
//             authorUser: {username: 'test'},
//         },
//     ],
// };
Default.args = {
    tags: [
        {
            tagName: 'CmgOut',
            tagId: '1',
            tagColor: '#FF758c',
        },
        {
            tagName: 'Culture',
            tagId: '2',
            tagColor: '#FF758c',
        },
        {
            tagName: 'Gay',
            tagId: '3',
            tagColor: '#FF758c',
        }],
};
