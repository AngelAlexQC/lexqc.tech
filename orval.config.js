module.exports = {
  'dev-to': {
    input: 'https://developers.forem.com/redocusaurus/plugin-redoc-0.yaml',
    output: {
      mode: 'tags-split',
      target: './src/generated/juvotrack.ts',
      schemas: './src/generated/models',
      client: 'swr',
      override: {
        mutator: {
          path: './src/orval/custom-instance.ts',
          name: 'customInstance',
        },
      },
    },
  },
};
