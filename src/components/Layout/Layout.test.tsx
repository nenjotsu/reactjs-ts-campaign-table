import * as React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Layout from './Layout';

configure({ adapter: new EnzymeAdapter() });

describe('Header Component', () => {
  it('Layout should render without props', () => {
    const WrapperLayout = shallow(
      <Layout>
        <span>Yow</span>
      </Layout>,
    );
    expect(WrapperLayout).toMatchSnapshot();

    const MountedLayout = mount(
      <Layout>
        <span>Yow</span>
      </Layout>,
    );
    expect(MountedLayout).toMatchSnapshot();

    const div = document.createElement('div');
    render(
      <Layout>
        <span>Yow</span>
      </Layout>,
      div,
    );

    MountedLayout.unmount();
  });
});
