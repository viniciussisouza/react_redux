/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Helmet } from 'react-helmet-async';

import messages from './messages';

export default function HomePage() {
  const intl = useIntl();
  return (
    <>
      <Helmet>
        <title>{intl.formatMessage(messages.pageTitle)}</title>
        <meta
          name="description"
          content={intl.formatMessage(messages.pageDescription)}
        />
      </Helmet>
      <div className="wrapper"></div>
    </>
  );
}
