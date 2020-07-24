import React from 'react';
import { mount } from 'enzyme';
import Input from '../../../../common/components/input/Input';

describe('input', () => {
  it('should mount', () => {
    const wrapper = mount(<Input/>);

    expect(wrapper.length).toBeTruthy();
  });
});