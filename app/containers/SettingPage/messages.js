/*
 * SettingPage Messages
 *
 * This contains all the text for the SettingPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'boilerplate.containers.SettingPage.header',
    defaultMessage: 'Settings',
  },
  networkHeader: {
    id: 'boilerplate.containers.SettingPage.network.header',
    defaultMessage: 'Offline-first',
  },
  networkMessage: {
    id: 'boilerplate.containers.SettingPage.network.message',
    defaultMessage: `
      The next frontier in performant web apps: availability without a
      network connection from the instant your users load the app.
    `,
  },
});
