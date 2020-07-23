import React from 'react';
import './RepoItem.scss';

const RepoItem = (props) => {
  const { item, onClick } = props;
  console.log(item);
  return (
    <div className='list-repo-item'>
      <div >
        <button onClick={() => onClick(item)}>
          {item.full_name}
        </button>
        <div>
        {item.description}
        </div>
      </div>
    </div>
    //maybe change to button and style to remove borders
  );
};

export default RepoItem;