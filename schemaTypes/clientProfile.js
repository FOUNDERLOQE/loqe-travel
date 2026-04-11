{
  name: 'recommendationSnapshots',
  title: 'Recommendation Snapshots',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'createdAt',
          title: 'Created At',
          type: 'datetime',
        },
        {
          name: 'summaryTitle',
          title: 'Summary Title',
          type: 'string',
        },
        {
          name: 'topDestinations',
          title: 'Top Destinations',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'destinationId', title: 'Destination ID', type: 'string' },
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'slug', title: 'Slug', type: 'string' },
                { name: 'country', title: 'Country', type: 'string' },
                { name: 'region', title: 'Region', type: 'string' },
                { name: 'budgetBand', title: 'Budget Band', type: 'string' },
                { name: 'recommendationScore', title: 'Recommendation Score', type: 'number' },
                {
                  name: 'matchReasons',
                  title: 'Match Reasons',
                  type: 'array',
                  of: [{ type: 'string' }],
                },
                {
                  name: 'matchWarnings',
                  title: 'Match Warnings',
                  type: 'array',
                  of: [{ type: 'string' }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
