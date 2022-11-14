export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '6372b0e209b24c151dbc461e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-project-studio-jq7rajp5',
                  apiId: 'dfef7063-b321-4930-ac99-1191b68e9e13'
                },
                {
                  buildHookId: '6372b0e29ec65b199a30c097',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-project-web',
                  apiId: '56f7fe88-79d7-4d44-8101-db24cc605b56'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ling-kan/sanity-gatsby-project',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-project-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
