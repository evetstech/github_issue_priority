import React from 'react';
import { useTable } from 'react-table';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { TopLevelDiv, Tr } from './TableStyledComponents';

const Table = (props) => {
  const { columns, data = [], reorderData } = props;
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({ columns, data })

  const handleDragEnd = result => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    reorderData(source.index, destination.index);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <TopLevelDiv>
        <table className='table' {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup
                  .headers
                  .map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
              </tr>
            ))}
          </thead>
          <Droppable droppableId="table-body">
            {(provided) => (
              <tbody ref={provided.innerRef} {...provided.droppableProps}>
                {rows.length === 0 ?
                  <tr>
                    <td colSpan={4}>No Current Issues</td>
                  </tr>
                  : rows.map((row, i) => {
                    prepareRow(row);
                    return (
                      <Draggable
                        draggableId={row.original.idx}
                        key={row.original.idx}
                        index={row.index}
                      >
                        {(provided, snapshot) => {
                          return (
                            <Tr
                              {...row.getRowProps()}
                              {...provided.draggableProps}
                              ref={provided.innerRef}
                              isDragging={snapshot.isDragging}
                              {...provided.dragHandleProps}
                            >
                              {row.cells.map(cell => (
                                <td {...cell.getCellProps()}>
                                  {cell.render("Cell")}
                                </td>
                              ))}
                            </Tr>
                          );
                        }}
                      </Draggable>
                    );
                  })}
                {provided.placeholder}
              </tbody>
            )}
          </Droppable>
        </table>
      </TopLevelDiv>
    </DragDropContext>
  );
};

export default Table;