import * as React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Header from './Header';
import Navigation from './Navigation';

configure({ adapter: new EnzymeAdapter() });

describe('Header Component', () => {
  it('Header should render without props', () => {
    const WrapperHeader = shallow(<Header />);
    expect(WrapperHeader).toMatchSnapshot();

    const MountedHeader = mount(<Header />);
    expect(MountedHeader).toMatchSnapshot();

    const div = document.createElement('div');
    render(<Header />, div);

    MountedHeader.unmount();
  });

  it('Navigation should render without props', () => {
    const WrapperNavigation = shallow(<Navigation />);
    expect(WrapperNavigation).toMatchSnapshot();

    const MountedNavigation = mount(<Navigation />);
    expect(MountedNavigation).toMatchSnapshot();

    const div = document.createElement('div');
    render(<Navigation />, div);

    MountedNavigation.unmount();
  });
});
