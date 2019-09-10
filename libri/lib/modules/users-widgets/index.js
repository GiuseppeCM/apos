module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Utenti',
    contextualOnly: true,
    construct: function(self, options) {
        self.route('post', 'users', function(req, res) {
            console.log('funziona')
        })

    }
}