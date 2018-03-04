import * as React from 'react';

import renderer from 'react-test-renderer';

import {IntlProvider} from 'react-intl';
import i18n from '../../../../../i18n';
const locale = i18n.getBrowserLocale();
const messages =  i18n.getMessages(locale);

import FormWelcome from '../';

describe('LoginForm/FormWelcome', () => {
    test('Component can render', () => {
        const component = renderer.create(<IntlProvider locale={locale} messages={messages}><FormWelcome /></IntlProvider>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
