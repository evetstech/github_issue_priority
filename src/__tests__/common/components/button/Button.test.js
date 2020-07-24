import React from 'react';
import { mount } from 'enzyme';
import Button from '../../../../common/components/button/Button';
import renderer from 'react-test-renderer';

describe('button', () => {
  it('should mount', () => {
    const wrapper = mount(<Button/>);

    expect(wrapper.length).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<Button text={'hi'}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});