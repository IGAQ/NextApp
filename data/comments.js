export const comments = [
    {
        username: 'John',
        date: '3 hours ago',
        content: '#Hello\n>quote\n\n`code`',
        score: 12,
        comments: [
            {
                username: 'John',
                date: '2 hours ago',
                score: 8,
                comments: [
                    {
                        username: 'John',
                        date: '1 hours ago',
                        score: 3,
                        comments: [],
                    },
                ],
            },
            {
                username: 'John',
                date: '4 hours ago',
                content: 'click on reply to open up a content prompt',
                score: 5,
                comments: [],
            },
            {
                username: 'John',
                date: '4 hours ago',
                content: 'click on reply to open up a content prompt',
                score: 5,
                comments: [],
            },
            {
                username: 'John',
                date: '4 hours ago',
                content: 'click on reply to open up a content prompt',
                score: 5,
                comments: [],
            },
            {
                username: 'John',
                date: '10 mins ago',
                content: 'this',
                score: 2,
                comments: [
                    {
                        username: 'John',
                        date: '8 mins ago',
                        content: 'is',
                        score: 1,
                        comments: [
                            {
                                username: 'John',
                                date: '5 mins ago',
                                content: 'to',
                                score: 0,
                                comments: [
                                    {
                                        username: 'John',
                                        date: '4 mins ago',
                                        content: 'show',
                                        score: -1,
                                        comments: [
                                            {
                                                username: 'John',
                                                date: '2 mins ago',
                                                content: 'nesting',
                                                score: -200,
                                                comments: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];