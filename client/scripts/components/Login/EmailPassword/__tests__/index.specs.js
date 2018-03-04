import * as React from 'react';

import {IntlProvider} from 'react-intl';
import i18n from '../../../../../i18n';
const locale = i18n.getBrowserLocale();
const messages =  i18n.getMessages(locale);

import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import EmailPassword from '../';

describe('components/DumbBtn', () => {

    test('Component can render', () => {
        const component = renderer.create(<IntlProvider locale={locale} messages={messages}><EmailPassword /></IntlProvider>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    // test('Component change title on click', () => {
    //
    //     const testTitle= 'TestTitle';
    //     const component = mount(<EmailPassword title={testTitle}/>);
    //
    //     expect(component.text()).toEqual(testTitle);
    //     component.simulate('click');
    //     expect(component.text()).toEqual('Bye');
    // });

});
