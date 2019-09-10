// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  types: [
    {
      name: 'home',
      label: 'Home'
    }],
  park: [
    {
      name: 'libri',
      label: 'Libri',
      type: 'libro-page',
      parkedId: 'lista-libri',
      published: true,
      slug: '/lista-libri'
    },
    {
      name: 'biblioteca',
      label: 'Biblioteche',
      type: 'biblioteca-page',
      parkedId: 'lista-biblioteche',
      published: true,
      slug: '/lista-biblioteche'
    },
    {
      name: 'users',
      label: 'Utenti',
      type: 'users-page',
      parkedId: 'lista-utenti-esterni',
      published: true,
      slug: '/lista-utenti'
    }
  ]


  // Add more page types here, but make sure you create a corresponding
  // template in lib/modules/apostrophe-pages/views/pages!
};
