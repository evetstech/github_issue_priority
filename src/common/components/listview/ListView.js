import React from 'react';
import './ListView.scss';

const ListView = (props) => {
  const { items, onClick, type, selected, header } = props;

  return (
    <div className={type === 'column' ? 'listview-wrap-col' : 'listview-wrap'}>
      <h2>{header}</h2>
      <ul className={type === 'column' ? 'ul-wrap-col' : 'ul-wrap' } data-role="listview" data-view="content" data-select-node="true">
        {items && items.map((item, index) => (
          <li key={index}>
            <div className={selected === item.full_name ? 'list-item-selected' : type === 'column' ? 'list-item-col' : 'list-item'}>
              <button onClick={() => onClick(item)}>
                {item.full_name}
                {type !== 'column' &&
                  <div>
                    {item.description}
                    <span>Forks: {item.forks} Stargazers: {item.stargazers_count} Issues: {item.open_issues}</span>
                  </div>}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListView;