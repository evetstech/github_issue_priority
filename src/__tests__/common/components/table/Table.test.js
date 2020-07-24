import React from 'react';
import { mount } from 'enzyme';
import Table from '../../../../common/components/table/Table';

jest.mock('react-beautiful-dnd', () => {
  return {
    DragDropContext: (props) => {
      props.onDragEnd({ source: 'test', destination: 'test' }); 
      props.onDragEnd({}); 
      return <div>{props.children}</div>;
    },
    Droppable: ({ children }) => children({
      draggableProps: {
        style: {},
      },
      innerRef: jest.fn(),
    }, {}),
    Draggable: ({ children, index }) => children({
      draggableProps: {
        style: {},
      },
      innerRef: jest.fn(),
    }, {
      isDragging: index === 1 ? true : false
    }),
  }
});

describe('table', () => {
  it('should mount', () => {
    const columns = [
      {
        Header: 'stuff',
        accessor: 'stuff',
      },
      {
        Header: 'stuff2',
        accessor: 'stuff2'
      }
    ];
    const data = [
      {
        stuff: 'stuff',
        idx: 1
      },
      {
        stuff2: 'stuff2',
        idx: 2
      }
    ];

    const reorderData = jest.fn();
    const wrapper = mount(<Table data={data} columns={columns} reorderData={reorderData}/>);

    expect(wrapper.length).toBeTruthy();
    expect(reorderData).toHaveBeenCalled();
  });

  it('should mount with empty data', () => {
    const columns = [
      {
        Header: 'stuff',
        accessor: 'stuff',
      },
      {
        Header: 'stuff2',
        accessor: 'stuff2'
      }
    ];
    const data = [
    ];

    const reorderData = jest.fn();
    const wrapper = mount(<Table data={data} columns={columns} reorderData={reorderData}/>);

    expect(wrapper.length).toBeTruthy();
    expect(reorderData).toHaveBeenCalled();
  });

  it('should mount with no data passed', () => {
    const columns = [
      {
        Header: 'stuff',
        accessor: 'stuff',
      },
      {
        Header: 'stuff2',
        accessor: 'stuff2'
      }
    ];
    const data = [
    ];

    const reorderData = jest.fn();
    const wrapper = mount(<Table columns={columns} reorderData={reorderData}/>);

    expect(wrapper.length).toBeTruthy();
    expect(reorderData).toHaveBeenCalled();
  });
});