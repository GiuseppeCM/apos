const r = require('request')
module.exports = {
    extend: 'apostrophe-custom-pages',
    name: 'users-page',
    afterConstruct: function(self) {

        self.dispatchAll();

    },

    construct: function(self, options) {

        self.indexPage = function(req, callback) {

            r('https://jsonplaceholder.typicode.com/users', function(error, response, body) {
                // gestione errore chiamata http
                //che ritorna sempre qualcosa e mai l'errore
                //della chiamata nell'html
                if (error) {
                    req.data.users = [];
                } else {
                    req.data.users = JSON.parse(body);
                }
                //sovrascrivo il template con una pagina custom creata
                // nella cartella views e chiamata in questo caso index
                req.template = self.renderer('index');

                callback(null);

            })

        };

        self.detailPage = function(req, callback) {
            r('https://jsonplaceholder.typicode.com/users/' + req.params.id, function(error, response, body) {
                // gestione errore chiamata http
                //che ritorna sempre qualcosa e mai l'errore
                //della chiamata nell'html
                if (error) {
                    req.data.user = [];
                } else {
                    req.data.user = JSON.parse(body);
                }
                //sovrascrivo il template con una pagina custom creata
                // nella cartella views e chiamata in questo caso index
                req.template = self.renderer('detail');

                callback(null);

            })


        };

        self.dispatchAll = function() {
            self.dispatch('/', self.indexPage);
            self.dispatch('/:id', self.detailPage);
        };

    }


}