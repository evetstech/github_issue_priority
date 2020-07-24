import React from 'react';
import { mount } from 'enzyme';
import Table from '../../../../common/components/input/Table';

describe('input', () => {
  it('should mount', () => {
    const wrapper = mount(<Table/>);

    expect(wrapper.length).toBeTruthy();
  });
});