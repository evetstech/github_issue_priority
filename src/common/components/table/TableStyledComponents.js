import styled from "styled-components";

// with react-beautiful-dnd integration, my drag-n-drop css was getting condensed for some reason,
// so I had to switch over to using styled-components for this component, instead of sass
export const TopLevelDiv = styled.div`
padding: 1rem;
transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
background-color: white;
border-radius: 4px;
box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
table {
  margin: auto;
  table-layout: fixed;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  transition: background-color 0.5s ease;
  thead {
    display: table-header-group;
    tr {
      color: inherit;
      display: table-row;
      outline: 0;
      vertical-align: middle;
    }
    th {
      display: table-cell;
      padding: 1rem;
      font-size: 1rem;
      text-align: left;
      font-weight: 600;
      vertical-align: inherit;
    }
    th:first-child {
      font-weight: 500;
      line-height: 1.5rem;
    }
    th:not(:first-child):not(:nth-child(2)) {
      text-align: right;
      flex-direction: row-reverse;
    }
  }
  tbody {
    display: table-row-group;
    tr {
      color: inherit;
      display: table-row;
      outline: 0;
      vertical-align: middle;
      td {
        display: table-cell;
        padding: 1rem;
        text-align: left;
        vertical-align: inherit;
      }
      td:not(:first-child):not(:nth-child(2)) {
        text-align: right;
        flex-direction: row-reverse;
      }
    }
  }
  th,
  td {
    display: table-cell;
    text-align: left;
    line-height: 1.43;
    border-bottom: 1px solid rgba(81, 81, 81, 1);
    vertical-align: inherit;
    padding: 0.5rem;
    height: 30px;
    text-align: center;
    width: 30%;
    :first-child {
      width: 5%;
    }
    :not(:first-child):not(:nth-child(2)) {
      width: 8%;
      text-align: right;
    }
  },
  img {
    border-radius: 50%;
  }
}
`;

export const Tr = styled.tr`
  background-color: ${({ isDragging }) => (isDragging ? "#E8F8F5" : "white")};
  border-bottom: 1px solid rgba(81, 81, 81, 1);
`;