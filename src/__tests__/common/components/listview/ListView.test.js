import React from 'react';
import { mount } from 'enzyme';
import ListView from '../../../../common/components/listview/ListView';

describe('listview', () => {
  it('should mount', () => {
    const wrapper = mount(<ListView/>);

    expect(wrapper.length).toBeTruthy();
  });

  it('should mount with items', () => {
    const wrapper = mount(<ListView items={[{stuff:'stuff'}]}/>);

    expect(wrapper.length).toBeTruthy();
  });

  it('should mount with items', () => {
    const wrapper = mount(<ListView selected='stuff' items={[{full_name:'stuff'}]}/>);

    expect(wrapper.length).toBeTruthy();
  });

  it('should mount with items in column format', () => {
    const wrapper = mount(<ListView selected='not' type='column' items={[{full_name:'stuff'}]}/>);

    expect(wrapper.length).toBeTruthy();
  });

  it('should mount with items in column format selected', () => {
    const wrapper = mount(<ListView selected='stuff' type='column' items={[{full_name:'stuff'}]}/>);

    expect(wrapper.length).toBeTruthy();
  });

  it('should mount with items in full format', () => {
    const wrapper = mount(<ListView selected='not' type='full' items={[{full_name:'stuff'}]}/>);

    expect(wrapper.length).toBeTruthy();
  });

  it('should mount with items in full format selected', () => {
    const wrapper = mount(<ListView selected='stuff' type='full' items={[{full_name:'stuff'}]}/>);

    expect(wrapper.length).toBeTruthy();
  });
});