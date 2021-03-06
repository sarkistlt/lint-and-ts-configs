module.exports = {
  release: {
    branch: 'master'
  },
  plugins: [
    ['@semantic-release/git', {
      message: 'chore(release): ${nextRelease.version} \n\n${nextRelease.notes}'
    }],
    ['@semantic-release/release-notes-generator', {
      preset: 'angular',
      parserOpts: {
        noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
      },
      writerOpts: {
        commitsSort: ['subject', 'scope']
      }
    }]
  ],
  verifyConditions: ['@semantic-release/github'],
  prepare: ['@semantic-release/git'],
  publish: ['@semantic-release/github'],
  noCi: true
};
