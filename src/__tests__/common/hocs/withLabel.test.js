import React from 'react';
import { mount } from 'enzyme';
import withLabel from '../../../common/hocs/withLabel';

describe('withLabel', () => {
  it('should add a label', () => {
    const Div = () => <div/>;
    const WithLabelDiv = withLabel(Div);
    const wrapper = mount(<WithLabelDiv/>);

    expect(wrapper.length).toBeTruthy();
  });
});