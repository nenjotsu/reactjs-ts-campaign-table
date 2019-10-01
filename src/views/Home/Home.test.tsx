import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/main.store';
import { configure, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Home from '.';
import { DateFormat, abbrNum, formatDate } from './components/constants';

configure({ adapter: new EnzymeAdapter() });

describe('Home', () => {
  const HomeWrapper = shallow(
    <Provider store={store}>
      <Home />
    </Provider>,
  );

  it('component toBeDefined', () => {
    expect(HomeWrapper).toMatchSnapshot();
  });
});

describe('Constants & Utils', () => {
  it('should valid date format', () => {
    expect(DateFormat).toEqual('DD/MM/YYYY');
  });

  it('should abbrebiate the money', () => {
    expect(abbrNum(1000)).toEqual('1k');
    expect(abbrNum(1200, 2)).toEqual('1.2k');
    expect(abbrNum(109078)).toEqual('109.1k');
    expect(abbrNum(272552)).toEqual('272.6k');
    expect(abbrNum(5272552)).toEqual('5.3m');
  });
});
