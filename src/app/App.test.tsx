import * as React from 'react';
import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

configure({ adapter: new EnzymeAdapter() });

describe('Test App root Methods', () => {
  const AppWrapper = shallow<App>(<App />);
  it('isLoggedIn initial state should be false', () => {
    expect(AppWrapper.state('isLoggedIn')).toEqual(false);
  });

  it('Trigger handleLogin isLoggedIn state should be true', () => {
    AppWrapper.instance().handleLogin();
    expect(AppWrapper.state('isLoggedIn')).toEqual(true);
  });

  it('Trigger handleLogout isLoggedIn state should be false', () => {
    AppWrapper.instance().handleLogout();
    expect(AppWrapper.state('isLoggedIn')).toEqual(false);
  });
});
