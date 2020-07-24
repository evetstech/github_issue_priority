import React from 'react';
import { mount } from 'enzyme';
import Button from '../../../../common/components/button/Button';

describe('button', () => {
  it('should mount', () => {
    const wrapper = mount(<Button/>);

    expect(wrapper.length).toBeTruthy();
  });
});