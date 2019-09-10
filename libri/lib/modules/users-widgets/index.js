module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Utenti',
    contextualOnly: true,
    construct: function(self, options) {
        self.template = 'placeholder';
        self.route('post', 'users', function(req, res) {
            debugger
            const r = require('request');
            r('https://jsonplaceholder.typicode.com/users', function(error, response, body) {
                if (error) {
                    return res.send([]);
                }
                return res.send(
                    self.render(req, 'widget', {
                        options: {},
                        users: JSON.parse(body)
                    })
                )

            })
        })

    }
}