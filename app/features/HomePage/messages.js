/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage feature.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.features.HomePage';

export default defineMessages({
  pageTitle: {
    id: `${scope}.pageTitle`,
    defaultMessage: 'Home Page | Home Page',
  },
  pageDescription: {
    id: `${scope}.pageDescription`,
    defaultMessage: 'Home Page',
  },
});
