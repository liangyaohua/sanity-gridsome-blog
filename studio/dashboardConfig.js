export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '607b15f9e680e1b3fe438f9d',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-pi42yozu',
                  apiId: '9a4016f9-5f75-4635-acc7-ac5297e0a08a'
                },
                {
                  buildHookId: '607b15fa78459a7cf698cc4f',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-wjxmh2vb',
                  apiId: 'cbe56411-30e4-4eaa-9702-9e46d01549c6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/liangyaohua/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-wjxmh2vb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
