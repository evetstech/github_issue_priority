import React from 'react';
import { mount } from 'enzyme';
import useFetch from '../../../common/hooks/useFetch';

jest.mock('../../../common/services/octokitRequest', () => {
  return {
    __esModule: true,
    default: () => { return { data: 'hi' }; }
  }
});
describe('useFetch', () => {
  it('should fetch dummy data', () => {
    const RandomComponent = () => {
      useFetch('random', 'random2', () => {});

      return <div />;
    }
    const wrapper = mount(<RandomComponent />);

    expect(wrapper.length).toBeTruthy();
  });

  it('should do nothing', () => {
    const RandomComponent = () => {
      useFetch();

      return <div />;
    }
    const wrapper = mount(<RandomComponent />);
    
    expect(wrapper.length).toBeTruthy();
  });
});