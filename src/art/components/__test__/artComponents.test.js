import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import DuckComponent from '../DuckComponent';

test('DuckComponent Snapshot', () => {
  const snapshot = renderer.create(
    <DuckComponent type="stream" foo={'Skrit Skrit'} />
  ).toJSON();

  expect(snapshot).toMatchSnapshot();
});

test('Duck Enzyme', () => {
  const wrapper = mount(<DuckComponent foo={'Skrit Skrit'}/>);

  const thing = wrapper.find('div');
  expect(wrapper.find('div')).toHaveLength(1);
});
