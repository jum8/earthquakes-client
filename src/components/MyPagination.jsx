import React from 'react'
import { Pagination } from 'react-bootstrap';

const MyPagination = ({ total, current, onChangePage }) => {
  let items = [];

  const maxVisiblePages = 10;

  if (current > 1) {
    items.push(<Pagination.Prev key="prev" onClick={() => onChangePage(current - 1)} />)
  }

  const startPage = Math.max(1, current - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(total, startPage + maxVisiblePages - 1);

  if (startPage > 1) {
    items.push(<Pagination.Ellipsis key="startEllipsis" />);
  }

  for (let page = startPage; page <= endPage; page++) {
    items.push(
      <Pagination.Item
        key={page}
        data-page={page}
        active={page === current}
        onClick={() => onChangePage(page)}
      >
        {page}
      </Pagination.Item>
    );
  }

  if (endPage < total) {
    items.push(<Pagination.Ellipsis key="endEllipsis" />);
  }

  if (current < total) {
    items.push(<Pagination.Next key="next" onClick={() => onChangePage(current + 1)} />);
  }

  return (
    <Pagination className='justify-content-center'>{items}</Pagination>
  );
};


export default MyPagination