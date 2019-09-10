var path = require('path');

var apos = require('apostrophe')({
  shortName: 'libri',
  modules: {
    'apostrophe-db': {
      uri: 'mongodb://localdocker:27018/libri'
    },
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },


    'libro': {},
    'libro-widgets': {},
    'libro-pages': {},

    'biblioteca': {},
    'biblioteca-widgets': {},
    'biblioteca-pages': {},
    'users-widgets': {}
  }
});
