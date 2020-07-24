import React from 'react';
import { mount } from 'enzyme';
import Input from '../../../../common/components/input/Input';
import renderer from 'react-test-renderer';

describe('input', () => {
  it('should mount', () => {
    const wrapper = mount(<Input/>);

    expect(wrapper.length).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<Input value={'hi'}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});