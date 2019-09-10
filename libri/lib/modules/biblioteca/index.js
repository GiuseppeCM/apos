module.exports = {
    extend: 'apostrophe-pieces',
    name: 'biblioteca',
    label: 'Biblioteca',
    pluralLabel: 'Biblioteche',
    addFields: [
        {
            name: 'descrizione',
            label: 'Descrizione',
            type: 'string',
            textarea: true
        },
        {
            name: '_libri',
            type: 'joinByArray',
            label: 'Libri',
            withType: 'libro'
        }
    ],
    arrangeFields: [
        {
            name: 'info',
            label: 'Informazioni',
            fields: ['title', 'descrizione']
        },
        {
            name: 'admin',
            label: 'Administrative',
            fields: ['slug', 'published', 'tags']
        }
    ],
};