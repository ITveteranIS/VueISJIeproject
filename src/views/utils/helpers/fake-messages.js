export const fakeMessages = [
    {
        'type': 'text',
        'text': '您说啥小康不会',
        'disableInput': false
    },
    {
        'type': 'button',
        'text': '您是否要访问或链接我们?',
        'options': [
            {
                'text': '打开博客',
                'value': 'search',
                'action': 'postback'
            },
            {
                'text': '联系人工客服',
                'value': 'submit_ticket',
                'action': 'postback'
            },
        ],
        'disableInput': true
    },
    {
        'type': 'text',
        'text': 'Please type your problem',
        'disableInput': false
    },
    {
        'type': 'button',
        'text': 'Here are the results from our knowledgebase.',
        'options': [
            {
                'text': '联系小杰',
                'value': 'https://google.com',
                'action': 'url'
            },
            {
                'text': '联系官方',
                'value': 'https://google.com',
                'action': 'url'
            },
            {
                'text': "取消",
                'value': 'result_not_match',
                'action': 'postback'
            }
        ],
        'disableInput': true
    },
    {
        'type': 'text',
        'text': 'Sorry to hear that. Please type your problem and we will create a ticket for you.',
        'disableInput': false
    },
    {
        'type': 'button',
        'text': 'All done! Your support ticket is created.',
        'options': [
            {
                'text': 'View ticket',
                'value': 'https://google.com',
                'action': 'url'
            }
        ],
        'disableInput': false
    }
]
