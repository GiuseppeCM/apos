module.exports = {
    extend: 'apostrophe-pieces',
    name: 'libro',
    label: 'Libro',
    pluralLabel: 'Libri',
    addFields: [
        {
            name: 'descrizione',
            label: 'Descrizione',
            type: 'string',
            textarea: true
        },
        {
            type:'area',
            name:'body',
            contextual:true
        },
        {
            type:'joinByArrayReverse',
            name:'_biblioteche',
            reverseOf:'_libri',
            withType: 'biblioteca',
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