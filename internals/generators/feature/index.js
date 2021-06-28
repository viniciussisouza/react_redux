/**
 * Feature Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a feature component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or feature with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: 'wantHeaders',
      default: false,
      message: 'Do you want headers?',
    },
    {
      type: 'confirm',
      name: 'wantActionsAndReducer',
      default: true,
      message:
        'Do you want an actions/constants/selectors/reducer tuple for this feature?',
    },
    {
      type: 'confirm',
      name: 'wantSaga',
      default: true,
      message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: true,
      message: 'Do you want to load resources asynchronously?',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: '../../app/features/{{properCase name}}/index.js',
        templateFile: './feature/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/features/{{properCase name}}/tests/index.test.js',
        templateFile: './feature/test.js.hbs',
        abortOnFail: true,
      },
    ];

    // If component wants messages
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '../../app/features/{{properCase name}}/messages.js',
        templateFile: './feature/messages.js.hbs',
        abortOnFail: true,
      });
    }

    // If they want actions and a reducer, generate the slice,
    // the selectors and the corresponding tests
    if (data.wantActionsAndReducer) {
      // Selectors
      actions.push({
        type: 'add',
        path: '../../app/features/{{properCase name}}/selectors.js',
        templateFile: './feature/selectors.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path:
          '../../app/features/{{properCase name}}/tests/selectors.test.js',
        templateFile: './feature/selectors.test.js.hbs',
        abortOnFail: true,
      });

      // Slice
      actions.push({
        type: 'add',
        path: '../../app/features/{{properCase name}}/slice.js',
        templateFile: './feature/slice.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/features/{{properCase name}}/tests/slice.test.js',
        templateFile: './feature/slice.test.js.hbs',
        abortOnFail: true,
      });
    }

    // Sagas
    if (data.wantSaga) {
      actions.push({
        type: 'add',
        path: '../../app/features/{{properCase name}}/saga.js',
        templateFile: './feature/saga.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/features/{{properCase name}}/tests/saga.test.js',
        templateFile: './feature/saga.test.js.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: '../../app/features/{{properCase name}}/Loadable.js',
        templateFile: './component/loadable.js.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      path: '/features/',
    });

    return actions;
  },
};
