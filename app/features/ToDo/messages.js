/*
 * ToDo Messages
 *
 * This contains all the text for the ToDo feature.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.features.ToDo';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ToDo feature!',
  },
});
