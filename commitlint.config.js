/* eslint-disable prettier/prettier */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2, // error level (0 = disable, 1 = warning, 2 = error)
      'always', // applies this rule always
      [
        'resolved', //Resolution of errors or conflicts
        'ci', // Changes to CI configuration files and scripts
        'chore', // Routine tasks or maintenance work
        'docs', // Documentation changes
        'feat', // Introducing new features
        'fix', // Bug fixes
        'perf', // Performance improvements
        'refactor', // Code refactoring without adding new features or fixing bugs
        'revert', // Reverting previous commits
        'style', // Code style changes (e.g., formatting, missing semi-colons)
      ],
    ],
  },
};
